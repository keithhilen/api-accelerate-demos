'use strict'

// test.js

const test = require('../models/test');

exports.get = async (req, res) => {
  try {
    var context = req.context;

    var data = await test.get(context);
    context.responder.text(req, res, data);

  } catch(e) {
    context.responder.error(req,res,e);
  }
}
