import db from "../database.js";

export default class Artifact {
  constructor() {}

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
