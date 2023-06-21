import app from './app/app';
import database, { DBConnection } from './app/database/connection.db';

class Server {

    public db: DBConnection;

    constructor() {
        this.db = database;
    }

    start() {
        this.db.connect().then(() => {
            app.listen();
            console.log('Conexión exitosa a la base de datos');
        }).catch((err) => {
            console.log('Error', err.message);
        });
    }
}

new Server().start();

