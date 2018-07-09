import express from 'express';
import bookCtrl from '../controllers/book.controller';
import auth from '../config/passport'

const router = express.Router();

router.route('/')
  .get(auth.authenticate(), bookCtrl.getBooks)
  .post(auth.authenticate(), bookCtrl.addBook);

router.route('/:id')
  .get(auth.authenticate(),bookCtrl.getById)
  .put(auth.authenticate(), bookCtrl.modifyById)
  .delete(auth.authenticate(), bookCtrl.deleteById);

export default router;