import mongoose from 'mongoose'
import config from 'config';

export const mongoInit = () => {
    const connectionString = `mongodb://${config.get('mongodb.host')}:${process.env.MONGODB_KEY}@${config.get('mongodb.host')}.hostname:10255/?ssl=true&appName=@${config.get('mongodb.host')}@`;

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
