const db = require("../database.js");

class Answer {
  constructor() {}

  static async save(userID, answer, stationID) {
    return new Promise((resolve, reject) => {
      const sql = db.prepare(
        `INSERT INTO answers (stationID, answer, userID)
      VALUES (?,?,?);`,
        (err) => {
          if (err) {
            reject(err);
          }
          resolve("Data safed in Database");
        }
      );
      sql.run(stationID, answer, userID);
      sql.finalize();
    });
  }
}

module.exports = Answer;
