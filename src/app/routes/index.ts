import { Router } from 'express';
// import productRouter from "./product.route";
// import categoryRouter from "./category.route";

export interface Routes {
    path: string;
    router: Router;
}

export const mainRoutes: Array<Routes> = [
    // {
    //     path: 'products',
    //     router: productRouter,
    // },
    // {
    //     path: 'category',
    //     router: categoryRouter
    // }
];

