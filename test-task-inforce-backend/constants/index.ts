import { StatusCodesEnum } from './statusCodes.enum';

export const constants = {
  PORT: process.env.PORT || 4000,
  MONGO_DB_URL: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/products-app',
  statusCodes: StatusCodesEnum
};
