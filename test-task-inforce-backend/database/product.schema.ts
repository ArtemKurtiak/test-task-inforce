import { Document, model, Model, Schema } from 'mongoose';

import { IProduct } from '../models';

type ProductType = Document & IProduct;

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  size: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  imageUrl: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
});

export const Product: Model<ProductType> = model<ProductType>('product', ProductSchema);
