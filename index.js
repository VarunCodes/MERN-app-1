const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app); // returns a function and calls app object

const PORT = process.env.PORT || 5000;
app.listen(PORT);
