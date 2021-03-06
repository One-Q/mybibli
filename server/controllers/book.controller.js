import Book from '../models/book.model';

/**
 * Get all books from a User Id. Need authenticate
 * @param {*} req 
 * @param {*} res 
 */
function getBooks(req, res) {
  Book.find({uid: req.user._id, active: true})
    .sort([['createdAt', -1]])
    .exec((err, books) => {
      if(err) {
        return res.status(500).json({error: err});
      } else {
        return res.json(books)
      }
    })
}

/**
 * Add a book in database. Need authenticate
 * @param {*} req 
 * @param {*} res 
 */
function addBook(req, res) {
  console.log(req.body)
  let {isbn, title, description, author, releaseDate} = req.body;
  let uid = req.user._id;
  const book = new Book({
    isbn,
    author,
    title,
    description,
    releaseDate,
    uid
  })

  book.save((err, savedBook) => {
    if(err) {
      console.log(err)
      return res.status(500).json({error: 'Erreur interne'})
    } else {
      return res.json({book: savedBook})
    }
  })
}

function getById(req, res) {
  let id = req.params.id;
  let uid = req.user._id;

  Book.findOne({_id: id, uid})
    .exec((error, book) => {
      if(error) {
        return res.status(500).json({error})
      } else {
        return res.json({book})
      }
    })
}

function modifyById(req, res) {
  let id = req.params.id;
  let uid = req.user._id;

  Book.findOneAndUpdate({_id: id, active: true}, req.body, {new: true}, (error, newBook) => {
    if(error) {
      return res.status(500).json({error})
    }
    else if(newBook == null){
      return res.status(400).json({error: 'Les données introduites ne sont pas bonnes'})
    } else {
      return res.json({book: newBook})
    }
  })
}

function deleteById(req, res) {
  let id = req.params.id;
  let uid = req.user._id;

  Book.update({_id: id, active: true}, {$set: {active: false}}, function (error, savedBook) {
    if(error) {
      return res.status(500).json({error})
    }
    else if(savedBook == null){
      return res.status(400).json({error: 'Les données introduites ne sont pas bonnes'})
    } else {
      return res.json({book: savedBook})
    }
  })
}

export default { getBooks, addBook, getById, modifyById, deleteById };