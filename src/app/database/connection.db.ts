// import {Observable} from "rxjs"; //* OBSERVABLES
import { connect } from 'mongoose';
import config from '../config/config';

export class DBConnection {
    public URI: string;

    constructor() {
        this.URI = config.get('db.host');
    }

    async connect(): Promise<void> {
        try {
            await connect(this.URI, {});
        } catch (error) {
            console.error('Error de conexión a la base de datos:', error);
        }
    }

    // connectObs(): Observable<any> {
    //     return new Observable((subscriber) => {
    //         connect(this.URI, {}).then((res) => {
    //             subscriber.next(res);
    //             subscriber.complete();
    //         }).catch((err) => {
    //             subscriber.error(err.message);
    //         });
    //     });
    // }
}

export default new DBConnection();