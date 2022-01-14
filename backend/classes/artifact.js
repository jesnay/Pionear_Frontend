const db = require("../database.js");

class Artifact {
  constructor() {}

  static async getAll(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM artifacts WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve({
          name: rows.name,
          latitude: rows.latitude,
          longitude: rows.longitude,
          task: rows.task,
          description: rows.description,
          adress: rows.adress,
          topic: rows.topic,
          position: rows.position,
          author: rows.author,
          historicalText: rows.historicalText,
          scientificText: rows.scientificText,
        });
      });
    });
  }
}

module.exports = Artifact;
