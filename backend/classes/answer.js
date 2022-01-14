const db = require("../database.js");

class Answer {
  constructor() {}

  static async save(userID, answer, artifactID) {
    return new Promise((resolve, reject) => {
      const sql = db.prepare(
        `INSERT INTO answers (artifactID, answer, userID)
      VALUES (?,?,?);`,
        (err) => {
          if (err) {
            reject(err);
          }
          resolve("Data safed in Database");
        }
      );
      sql.run(artifactID, answer, userID);
      sql.finalize();
    });
  }
}

module.exports = Answer;
