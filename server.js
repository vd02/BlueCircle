const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./config/dbConfig");
app.use(express.json()); //destructure the json recieved from the client
const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute); // whenever the api request is coming with a keyword /api/user, it will be redirected to the userRoute file and search for the route there
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started on port ${port}`));
