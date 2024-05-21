'use strict'

// models/test.js

exports.get = async (context) => {

  return new Promise((resolve, reject) => {
    var data = "This is a test"
    resolve(data);
  });

}
