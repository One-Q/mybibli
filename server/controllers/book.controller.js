import Book from '../models/book.model';

/**
 * Get all books from a User Id. Need authenticate
 * @param {*} req 
 * @param {*} res 
 */
function getBooks(req, res) {
  Book.find({uid: req.user._id})
    .exec((err, books) => {
      if(err) {
        return res.status(500).send(err);
      } else {
        return res.json({books})
      }
    })
}

/**
 * Add a book in database. Need authenticate
 * @param {*} req 
 * @param {*} res 
 */
function addBook(req, res) {
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
      res.status(500).json({error: 'Erreur interne'})
    } else {
      res.json({book: savedBook})
    }
  })
}

export default { getBooks, addBook };