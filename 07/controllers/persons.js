'use strict'

// persons.js

const persons = require('../models/persons');

exports.get = async (req, res) => {
  try {
    var context = req.context;

    var person_id = req.params.person_id;
    var data = await persons.get(context, person_id);
    context.responder.respond(req, res, data);

  } catch(e) {
    context.responder.error(req,res,e);
  }
}

exports.list = async (req, res) => {
  try {
    var context = req.context;

    var data = await persons.list(context);
    context.responder.respond(req, res, data);

  } catch(e) {
    context.responder.error(req,res,e);
  }
}

exports.create = async (req, res) => {
  try {
    var context = req.context;

    var params = req.body;
    var data = await persons.create(context, params);
    var person_id = data.person_id;
    data = await persons.get(context, person_id);
    context.responder.respond(req, res, data);

  } catch(e) {
    context.responder.error(req,res,e);
  }
}

exports.update = async (req, res) => {
  try {
    var context = req.context;

    var person_id = req.params.person_id;
    var params = req.body;
    await persons.update(context, person_id, params);
    var data = await persons.get(context, person_id);

    context.responder.respond(req, res, data);

  } catch(e) {
    context.responder.error(req,res,e);
  }
}
