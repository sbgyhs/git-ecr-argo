import express from 'express';
import {
    getbooks,
    getbookById,
    createbook,
    updatebook,
    deletebook
} from '../controllers/bookController';

const router = express.Router();

router.get('/Books', getbooks);
router.get('/Books/:id', getbookById);
router.post('/Books', createbook);
router.patch('/Books/:id', updatebook);
router.delete('/Books/:id', deletebook);

export default router;