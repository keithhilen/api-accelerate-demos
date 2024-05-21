'use strict'

// ctlr.js

exports.hello_world = async (req, res) => {
  try {
    var context = req.context;

    context.responder.text(req, res, "hello, world")

  } catch(e) {
    context.responder.error(req,res,e);
  }
}

exports.test_1 = async (req, res) => {
  try {
    var context = req.context;

    context.responder.text(req, res, "This is the first router")

  } catch(e) {
    context.responder.error(req,res,e);
  }
}

exports.test_2 = async (req, res) => {
  try {
    var context = req.context;

    context.responder.text(req, res, "This is the second router")

  } catch(e) {
    context.responder.error(req,res,e);
  }
}

exports.nothing = async (req, res) => {
  try {
    var context = req.context;

    context.responder.notFound(req, res, "Nothing to see here")

  } catch(e) {
    context.responder.error(req,res,e);
  }
}
