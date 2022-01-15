const db = require("../database.js");

class Station {
  constructor() {}

  static async getAll(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM stations WHERE stationID=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve({
          topic: rows.topic,
          spot: rows.spot,
          adress: rows.adress,
          author: rows.author,
          description: rows.description,
          task: rows.task,
          section1: rows.section1,
          section2: rows.section2,
          latitude: rows.latitude,
          longitude: rows.longitude,
        });
      });
    });
  }
}

module.exports = Station;
