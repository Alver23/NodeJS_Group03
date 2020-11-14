// Dependencies
import mongoose from 'mongoose';
// Shared infraestructure
import { IDatabaseRepository } from "../shared/infraestructure/persistence/database-interface";

import yenv from 'yenv';

const env = yenv();

const database = env.DATABASE.MONGO;

export default class DatabaseBootstrap implements IDatabaseRepository {
    disconnect(): void {
        try {
            mongoose.disconnect()
        } catch (error) {
            console.log('DatabaseBootstrap', error);
        }
    }

    async initialize(): Promise<any> {
        const promiseInitialize = new Promise((resolve, reject) => {
            const connection = `mongodb+srv://${database.USER}:${database.PASSWORD}@${database.HOST}/${database.DB}?retryWrites=true&w=majority`;
            const options = {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                poolSize: 10,
            }
            mongoose.connect(connection, options)
                .then(() => resolve('connection succesfuly'))
                .catch(reject);
        });
         await promiseInitialize;
    }

}
