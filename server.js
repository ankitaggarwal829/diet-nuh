const express = require('express');
const path = require('path');

const app = express();

// Serve your site under /diet-nuh (same as GitHub Pages)
app.use('/diet-nuh', express.static(path.join(__dirname)));

// Optional: redirect root → /diet-nuh/
app.get('/', (req, res) => {
  res.redirect('/diet-nuh/');
});

app.listen(3000, () => {
  console.log('Running at http://localhost:3000/diet-nuh/');
});