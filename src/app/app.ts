import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/config';
import { mainRoutes as routes, Routes } from './routes';

class App {
    app: Express;

    port: number;

    constructor() {
        this.app = express();
        this.port = config.get('server.port');
        this.middlewares();
    }

    private middlewares() {
        this.app.set('port', this.port);
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.routes();
    }

    private routes(): void {
        // const routes = new Routes().getRoutes();
        routes.forEach(({ path, router }: Routes) => {
            this.app.use(`/api/v1/${path}`, router);
        });
        // this.app.use('/', routes);
    }

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running port on http://localhost:${this.port}`);
        });
    }

}

export default new App();