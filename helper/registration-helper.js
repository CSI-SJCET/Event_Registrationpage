const promise = require("promise");
const db = require("../db/mongo_connection");
const registration = require("../schema/registration"); 

module.exports = {
  insert_std: (student_data) => {
    return new promise((resolve, reject) => {

      registration.insertMany(student_data)
        .then((savedStudent) => {
          resolve({ Status: "INSERTED", data: savedStudent });
        })
        .catch((error) => {
          console.error("Error saving student:", error);
          reject(error);
        });
    });
  },
};
