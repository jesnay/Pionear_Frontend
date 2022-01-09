const sqlite3 = require("sqlite3");

let myDatabase = new sqlite3.Database(
  "./data/database.db",
  sqlite3.OPEN_READWRITE,
  function (err) {
    if (err) {
      console.log("FEHLER", err.message);
      return;
    }
    console.log("Databse connected");
  }
);

module.exports = myDatabase;
