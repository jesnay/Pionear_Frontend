const db = require("../database.js");

class Answer {
  constructor() {}

  static async save(userID, answer, artifactID) {
    // For schleife methode so oft aufrufen wie ergebnisse übergeben werden
    console.log(answer);
    return new Promise((resolve, reject) => {
      db.prepare(
        `INSERT INTO answers (artifactID, answer, userID)
        VALUES (${artifactID},"${answer}", ${userID});`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve("Data safed in Database");
        }
      );
    });
  }
}

module.exports = Answer;
