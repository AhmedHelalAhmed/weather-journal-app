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

app.get("/data", (request, response) => {
  console.log(data);
  response.send(projectData);
});

app.post("/data", (request, response) => {
  newEntry = {
    animal: req.body.temperature,
    facts: req.body.date,
    fav: req.body.user_response,
  };
  projectData.push(newEntry);
  console.log(projectData);
  res.send(projectData);
});
