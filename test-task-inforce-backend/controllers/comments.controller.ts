import { NextFunction, Request, Response } from 'express';

import { Comment } from '../database';
import { IComment } from '../models';
import { Product } from '../database';
import { constants } from '../constants';

const { statusCodes } = constants;

export const commentsController = {
  addComment: async (req: Request, res: Response, next: NextFunction) => {
    const { product_id, description } = req.body;

    const comment: IComment = await Comment.create({
      description
    });

    await Product.findByIdAndUpdate(product_id, {
      $push: {
        comments: [comment._id]
      }
    });

    res
      .status(statusCodes.CREATED)
      .json(comment);
  }
};
