import HomePage from "../pages/HomePage/HomePage";
import {routeType} from "../types/route.type";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routesData: routeType[] = [
  {
    route: '/',
    Screen: HomePage,
    id: 1
  },
  {
    route: '/product',
    Screen: ProductPage,
    id: 2
  }
]

export const API_URL = 'http://localhost:5000'