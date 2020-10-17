import dotenv from 'dotenv';
dotenv.config();

import app from "./app.js";
import { mongoInit } from './db/nosql/models/index.js';

mongoInit();

const port = app.get('port');
const nodeEnv = process.env.NODE_ENV || 'default';

const server = app.listen(port, () => {
    console.info(`server is listening on ${port}, env: ${nodeEnv}`);
});

export default server;