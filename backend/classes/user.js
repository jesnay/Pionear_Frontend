const db = require("../database.js");

class User {
  constructor() {}

  static async getAll(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE userID=${id};`, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve({
          name: rows.name,
          email: rows.email,
        });
      });
    });
  }
}

module.exports = User;
