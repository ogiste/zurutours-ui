require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('public'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Recipe Application running on ${port}`));
