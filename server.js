const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3306;
const app = express();

const passport = require('passport');
const session = require('express-session');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//For passport
app.use(session({ secret: 'my secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Routes
var authRoute = require('./routes/auth.js')(app, passport);

const db = require('./models');

//Load passport strategies
require('./config/passport.js')(passport, db.user);




db.sequelize.sync().then(() => {
  // server static assets if in production
  if (process.env.NODE_ENV === 'production') {
      // set static folder
      app.use(express.static('client/build'));
      app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
});


// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
