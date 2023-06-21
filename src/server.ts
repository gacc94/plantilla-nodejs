import app from './app/app';
import database, { DBConnection } from './app/database/connection.db';
import config from './app/config/config';

class Server {

    public db: DBConnection;

    constructor() {
        this.db = database;
    }

    start() {
        this.db.connect().then(() => {
            app.listen();
            console.log(`Connection Succesfully DB =====> ${config.get('db.host')}`);
        }).catch((err) => {
            console.log('Error', err.message);
        });
    }
}

new Server().start();

