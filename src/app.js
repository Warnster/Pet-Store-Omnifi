import express from 'express';

const app = express();
import bodyParser from 'body-parser';
import api from './routes/index.js';
import config from 'config';
import compression from 'compression';

const port = config.get('server.port') || 1049;

app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(compression());

// Allow CORS
app.use((req, res, next) => {
  
    res.header("Access-Control-Allow-Origin", "*" );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-member-key");
    res.header("Access-Control-Allow-Credentials", "true");

    if(req.method === 'OPTIONS') {
        return res.status(200).json();
    }

    next();
});



// static files in public
app.use('/app', express.static('public'));

// register routes
app.use('/api', api);

// Handle invalid routes
app.use((req, res) => {

    const reqParams = [
        ['url', req.url],
        ['host', req.host],
        ['hostName', req.hostname],
        ['protocol', req.protocol],
        ['originalUrl', req.originalUrl],
        ['path', req.path]
    ];

    const headerStr = req.rawHeaders.join(',');
    const debugStr = reqParams.reduce((acc, val) => `${acc}, ${val[0]}: ${val[1]}`, '');
    const errMsg = `Error: route not Found: debug: ${debugStr} headers: ${headerStr}`;
    console.error(errMsg, { req });
    res.status(404).json(errMsg);
});

// Handle 500
app.use((err, req, res, next) => {

    console.trace();
    console.error('Internal server error', { req, err});
    res.status(500).json('Internal server error');
});

process.on('uncaughtException', (err) => {

    console.trace();
    console.error('Uncaught error:', { err });
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.trace();
    console.log(reason.message)
    console.error(`Unhandled rejection: ${reason.message}`, { reason, promise });
});

app.set("port", port);

export default app;