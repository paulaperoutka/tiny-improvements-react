const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Setting MONGODB_URI for deployment to Heroku
// If one does not exist, use localhost instead
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/improvements";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});