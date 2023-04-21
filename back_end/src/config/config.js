import * as dotenv from 'dotenv';

dotenv.config();
const MONGO_USER_NAME = process.env.MONGO_USER_NAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USER_NAME}:${MONGO_PASSWORD}@cluster0.1tce3cf.mongodb.net/?retryWrites=true&w=majority`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;

export const config = {
    mongo: {
        username: MONGO_USER_NAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};