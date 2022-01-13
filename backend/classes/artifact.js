const db = require("../database.js");

class Artifact {
  constructor() {}

  static async getAll(id) {
    return new Promise((resolve, reject) => {
      db.get(
        `SELECT name, latitude, longitude FROM artifacts WHERE id=${id};`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve({
            name: rows.name,
            latitude: rows.latitude,
            longitude: rows.longitude,
          });
        }
      );
    });
  }

  static async getName(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT name FROM artifacts WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows.name);
      });
    });
  }

  static async getLongitude(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT longitude FROM artifacts WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows.longitude);
      });
    });
  }

  static async getLatitude(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT latitude FROM artifacts WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows.latitude);
      });
    });
  }
}

module.exports = Artifact;
