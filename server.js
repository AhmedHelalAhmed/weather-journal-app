// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server

const port = 3000;

const server = app.listen(port, () =>
  console.log(`server running on localhost: ${port}`)
);

// To get the data of the application
app.get("/data", (request, response) => {
  response.send(projectData);
});

// To save data i the application
app.post("/data", (request, response) => {
  projectData = {
    temperature: request.body.temperature,
    date: request.body.date,
    user_response: request.body.user_response,
  };
  response.send(projectData);
});
