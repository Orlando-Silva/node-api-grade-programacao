const sql = require("./db.js");

const Programa = function(programa) {
  this.durationInMinutes = programa.durationInMinutes;
  this.description = programa.description;
  this.startTime = programa.startTime;
  this.endTime = programa.endTime;
  this.mediaId = programa.mediaId;
  this.isLive = programa.isLive;
  this.title = programa.title;
  this.date = programa.date;
};

Programa.criar = (novoPrograma, resultado) => {
  sql.query('INSERT INTO programa SET ?', novoPrograma, (err, res) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    return;
  });
};

Programa.buscarNaData = (date, resultado)  => {
  sql.query(`SELECT * FROM programa WHERE date LIKE '${date}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      resultado(null, err);
      return;
    }
    resultado(null, res);
  });
};

module.exports = Programa;
