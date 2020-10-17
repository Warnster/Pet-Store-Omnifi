import mongoose from 'mongoose'
import config from 'config';

export const mongoInit = () => {

    const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${config.get('mongodb.host')}/petstore?retryWrites=true&w=majority`;

    mongoose.connect(connectionString, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.error(err, {err});
    });
    db.on('connected', () => {
        console.info('Mongoose connection was successful');
    });
}
