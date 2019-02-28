global.fetch = require('node-fetch');
const express = require('express');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

// Router
const photos = require('./router/photos');

const unsplash = new Unsplash({
  applicationId: config.get('APPLICATION_ID'),
  secret: config.get('SECRET'),
  callbackUrl: config.get('CALLBACK_URL')
});

// Application instance
const app = express();

// Setting up routes
app.use('/api/photos', photos);

// Port assignment
const PORT = process.env.PORT || 5000;

// Server setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
