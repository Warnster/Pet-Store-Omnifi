# Pet-Store-Omnifi
Coding test of a simple rest api with crud operations. time limit 4 hours, Using express and mongoose

## Application
To start the rest server run "npm run-script dev"

## Database 
Rename .env.example to .env and the database should connect. It uses a cloud mongodb for ease of setup for this test.

## Endpoints
I've added a postman collection in ./postman_collection folder. Import this into postman and you should have all the CRUD endpoints to call and alter.

## Architecture
A bit of information the app and design. It uses expressjs for the server, mongoose for database access and hapi/joi for validation.

All code is located in ./src with the expection of ./public (empty folder just used for placeholder) and ./config. The config folder would store configuration for different environments, e.g. developement, staging, live ect.

The code is split into 3 layers, 

### Controllers
The job of these is to handle the input and response types

### Services 
These are responsible for the code flow. In this application it is very basic flow and they only call the data access layer. But in complex cases the service layer function would also trigger sending of emails after a user is created, for example.

### DOA 
The data access layers only job is to interact with the database, any computation logic should be left out of the DAO and placed into the services layers.

## Other folders and files

### models
These folders contain the mongoose schemas for the mongodb documents

### validation_schemas
This folder contains any validation objects that are used for the request validation.

### util
Adhoc utilities, in this case there is an api response class that is used to standardise the responses being sent back from every endpoint.

# Functions of the app.
This app does all the that is required on the specification except for adding siblings. Due to lack of time i didn't add this.
Also it is worth noting that the Appilication doesn't hard delete from the database, it only soft deletes by setting a isDeleted key = true;


