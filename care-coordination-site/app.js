const express = require('express');
const path = require('path');
const controller = require('../Controller/controller');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

// Static files
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.get('/', controller.getHome);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
