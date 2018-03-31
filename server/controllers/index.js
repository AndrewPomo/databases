var app = require('express')();
var models = require('../models');
var bodyParser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        var obj = {};
        obj.results = data;
        res.send(obj);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      app.use(bodyParser.json());
      // console.log(req.body);
      // models.messages.post(req.body);
      
      res.send()
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('hello users get');
    },
    post: function (req, res) {
      res.send('hello users post');
    }
  }
};

