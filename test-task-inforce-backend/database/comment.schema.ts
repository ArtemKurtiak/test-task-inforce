import { Document, model, Model, Schema } from 'mongoose';

import { IComment } from '../models/comment.model';

type CommentType = Document & IComment;

const CommentSchema: Schema = new Schema<IComment>({
  description: {
    type: String,
    required: true
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  }
}, { timestamps: true });

export const Comment: Model<CommentType> = model<CommentType>('comment', CommentSchema);
