const express = require('express');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

// Router instance for /api/photos
const Router = express.Router();

// Creating an unsplash object
const unsplash = new Unsplash({
  applicationId: config.get('APPLICATION_ID'),
  secret: config.get('SECRET'),
  callbackUrl: config.get('CALLBACK_URL')
});

/**
 * @route /api/photos
 * @access public
 * @desc api to fetch all image details
 */
Router.get('/', (req, res) => {
  const start = req.query.start;
  const count = req.query.count;
  unsplash.photos
    .listPhotos(start, count)
    .then(toJson)
    .then(json => res.json(json));
});

module.exports = Router;
