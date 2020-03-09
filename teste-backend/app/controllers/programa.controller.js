const DateHelper = require('../helpers/date.helpers.js');
const ProgramaService = require('../services/programa.services.js');

exports.buscarNaData = (request, response) => {

  let data = request.params.data;

  if (!DateHelper.dataValida(data)) {
      response.status(500).send('A data informada não é válida. Insira uma data no formado ano-mês-dia');
  }

  ProgramaService.buscarNaData(data, (resultado) => {
      response.send(resultado)
  })

};


