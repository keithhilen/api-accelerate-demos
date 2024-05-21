'use strict'

// models/persons.js

const util = require('api-accelerate').helpers.util;

exports.get = async (context, person_id) => {

  return new Promise(async (resolve, reject) => {
    try {
      await context.db.perform(async (connection) => {
        var q = 
          "SELECT \
             person_id, first_name, last_name, email_address \
           FROM persons \
           WHERE person_id = ?";
        var v = [person_id]
        var data = await connection.readOne(q, v)
        resolve(data);
      });
    } catch(e) {
      reject(e);
    }
  });
}

exports.list = async (context, person_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await context.db.perform(async (connection) => {

        var q = 
          "SELECT \
             person_id, \
             first_name, \
             last_name, \
             email_address \
           FROM persons \
           ORDER BY person_id";

        var v = []

        var data = await connection.readList(q, v)
        data = util.purify(data);

        resolve(data);
      });
    } catch(e) {
      reject(e);
    }
  });
}

exports.create = async (context, params) => {

  return new Promise(async (resolve, reject) => {
    try {
      await context.db.perform(async (connection) => {

        params = params || {};

        var q =
          'INSERT INTO persons \
            (first_name, \
             last_name, \
             email_address) \
            VALUES (?, ?, ?)';

        var v = [
          params.first_name,
          params.last_name,
          params.email_address
        ]

        try {
          var results = await connection.insert(q, v)
        } catch(e) { throw new DatabaseError(q,v,e) }

        var person_id = results.key;

        resolve({person_id: person_id});

      });
    } catch(e) {
      reject(e);
    }
  });
}

exports.update = async (context, person_id, params) => {

  return new Promise(async (resolve, reject) => {
    try {
      await context.db.perform(async (connection) => {

        params = params || {};

        var sets = [];
        var v = [];

        if ("first_name" in params) {
          sets.push("first_name = ?");
          v.push(params.first_name);
        }

        if ("last_name" in params) {
          sets.push("last_name = ?");
          v.push(params.last_name);
        }

        if ("email_address" in params) {
          sets.push("email_address = ?");
          v.push(params.email_address);
        }

        if (sets.length == 0) {
          return resolve();
        }

        v.push(person_id);

        var q ="UPDATE persons" + 
          " SET " + sets.join(", ") +
          " WHERE person_id = ?";

        try {
          await connection.update(q, v)
        } catch(e) { throw new DatabaseError(q,v,e) }

        resolve(true)

      });
    } catch(e) {
      reject(e);
    }
  });
}
