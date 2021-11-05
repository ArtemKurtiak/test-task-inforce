import { NextFunction, Request, Response } from 'express';

import { Product } from '../database';
import { IProduct } from '../models';
import { constants } from '../constants';

const { statusCodes } = constants;

export const productsController = {
  addProduct: async (req: Request, res: Response, next: NextFunction) => {
    const { data } = req.body;

    const product: IProduct = await Product.create({ ...data });

    res
      .status(statusCodes.CREATED)
      .json(product);
  },

  updateProduct: async (req: Request, res: Response, next: NextFunction) => {
    const { product_id, productData } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(product_id, {
      ...productData
    }, { new: true });

    res
      .status(statusCodes.SUCCESS)
      .json(updatedProduct);
  },

  deleteProduct: async (req: Request, res: Response, next: NextFunction) => {
    const { product_id } = req.body;

    await Product.findByIdAndDelete(product_id);

    res
      .status(statusCodes.NO_CONTENT)
      .json();
  },

  getProducts: async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find();

    res
      .status(statusCodes.SUCCESS)
      .json(products);
  },

  getProductById: async (req: Request, res: Response, next: NextFunction) => {
    const { product_id } = req.params;

    const product = await Product.findById(product_id).populate('comments');

    res
      .status(statusCodes.SUCCESS)
      .json(product);
  }
};
