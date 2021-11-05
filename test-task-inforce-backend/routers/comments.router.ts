const router = require('express').Router();

import { commentsController } from '../controllers/comments.controller';

const { addComment } = commentsController;

router.post('/', addComment);

export const commentsRouter = router;
