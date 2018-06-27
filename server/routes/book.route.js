import express from 'express';
import bookCtrl from '../controllers/book.controller';
import auth from '../config/passport'

const router = express.Router();

router.route('/')
  .get(auth.authenticate(), bookCtrl.getBooks)
  .post(auth.authenticate(), bookCtrl.addBook);

  /*
router.route('/:isbn')
  .get()
  .put()
  .delete();
*/
export default router;