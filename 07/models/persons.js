'use strict'

// models/persons.js

var nextId = 1;

const data = {};

data[String(nextId++)] = {
  first_name: "Walt",
  last_name: "Whitman",
  email_address: "whitman@poets.net"
};

data[String(nextId++)] = {
  first_name: "Emily",
  last_name: "Dickenson",
  email_address: "dickenson@poets.net"
};

exports.get = async (context, person_id) => {

  return new Promise((resolve, reject) => {

    if (!Object.keys(data).includes(person_id)) {
      throw new NotFoundError("Not found");
    }

    var record = {
      person_id: person_id
    }
    Object.assign(record, data[person_id]);

    resolve(record);
  });

}

exports.list = async (context) => {

  return new Promise((resolve, reject) => {
    var records = [];

    for (var person_id of Object.keys(data)) {
      var record = {
        person_id: person_id
      }
      Object.assign(record, data[person_id]);

      records.push(record)
    }
    resolve(records);
  });
}

exports.create = async (context, params) => {

  return new Promise((resolve, reject) => {

    var person_id = String(nextId++);

    var record = {
      first_name: params.first_name || "",
      last_name: params.last_name || "",
      email_address: params.email_address || ""
    }
    data[person_id] = record;
    resolve({person_id: person_id});

  });
}

exports.update = async (context, person_id, params) => {

  return new Promise((resolve, reject) => {

    if (!Object.keys(data).includes(person_id)) {
      throw new NotFoundError("Not found");
    }

    var record = data[person_id];
    record.first_name = params.first_name || record.first_name;
    record.last_name = params.last_name || record.last_name;
    record.email_address = params.email_address || record.email_address;

    resolve();

  });
}

