const express = require("express");
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app); // returns a function and calls app object

const PORT = process.env.PORT || 5000;
app.listen(PORT);
