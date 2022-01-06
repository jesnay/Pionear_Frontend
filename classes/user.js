import db from "../database.js";

export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.level = 1;
    this.id = this.getID();
  }

  all() {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) return console.error(err.message);
      rows.forEach((row) => {
        console.log(row);
      });
    });
  }

  insert() {
    const sql = db.prepare(
      "INSERT INTO users (name, email,level) VALUES (?, ?, ?)"
    );
    sql.run(this.name, this.email, this.level);
    sql.finalize();
  }

  updateLevel(name) {
    this.level++;
    const sql = db.prepare("UPDATE users SET level= ? WHERE name=?");
    sql.run(this.level, name);
    sql.finalize();
  }

  getID() {
    //*? Was ist der Unterschied von den beiden Versionen? Welches ist besser?
    db.all(`SELECT MAX(id) AS id FROM users`, [], (err, rows) => {
      if (err) return console.error(err.message);
      rows.forEach((row) => {
        this.id = row.id;
        console.log(this.id);
      });
    });

    /*const row = db.get(`SELECT MAX(id) AS id FROM users`, function (err, row) {
      if (row) {
        console.log(row.id);
      } else {
      }
    });*/
    return this.id;
  }
}
