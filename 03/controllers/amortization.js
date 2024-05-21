'use strict'

// amortization.js

const amortization = require('../models/amortization');

exports.amortize = async (req, res) => {
  try {
    var context = req.context;

    var params = {
      rate: req.body.rate,
      principal: req.body.principal,
      term: req.body.term
    };
    var data = await amortization.amortize(context, params);

    context.responder.text(req, res, data);

  } catch(e) {
    context.responder.error(req,res,e);
  }
}
