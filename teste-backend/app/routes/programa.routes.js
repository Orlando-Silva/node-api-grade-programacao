module.exports = app => {
  const programaController = require('../controllers/programa.controller.js');

  app.get('/programas/:data', programaController.buscarNaData);
};
