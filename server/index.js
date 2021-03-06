const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.set('view engine', 'hbs');

// Register Handlebars view engine
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
// Use Handlebars view engine
app.set('view engine', '.hbs');

// Pass in a test variable to be used in template:
app.get('/', (req, res) => {
  res.render('index', {"myvar": "myvar1"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);