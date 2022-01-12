const db = require("../database.js");

class User {
  constructor() {}

  static async getName(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT name FROM users WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows.name);
      });
    });
  }

  static async getEmail(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT email FROM users WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows.email);
      });
    });
  }

  static async getLevel(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT level FROM users WHERE id=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows.level);
      });
    });
  }
}

module.exports = User;
