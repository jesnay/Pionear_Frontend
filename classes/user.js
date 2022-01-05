import db from "../database.js";

export default class User {
  constructor() {}

  all() {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) return console.error(err.message);
      rows.forEach((row) => {
        console.log(row);
      });
    });
  }
}
