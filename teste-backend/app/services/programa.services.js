const Programa = require('../models/programa.model.js');
const request = require('request');

exports.buscarNaData = (dataRequisitada, retorno) => {
    Programa.buscarNaData(dataRequisitada, (erro, resultadoDoBanco) => {
        
        if(existeNoBancoDeDados(resultadoDoBanco)) {

            console.log('Retornando dados apartir do banco de dados.')
            retorno(resultadoDoBanco)

        } else {

            console.log('Buscando dados da API e salvando no banco de dados.')
            consultarAPI(dataRequisitada, dadosDaAPI => {
                
                let programas = prepararParaSalvar(dataRequisitada, dadosDaAPI)

                salvarNoBanco(programas, () => {
                    retorno(programas)
                })
            })
        }

    });   
};

existeNoBancoDeDados = (resultadoDoBanco) => {
    return resultadoDoBanco && resultadoDoBanco.length > 0
}

consultarAPI = (data, retorno) => {
    request(`https://epg-api.video.globo.com/programmes/1337?date=${data}`, { json: true }, (err, res, body) => {
        
        if (err) { 
            return console.log(err); 
        }     
        retorno(res.body)
    });
}

prepararParaSalvar = (data, dadosDaAPI) => {

    let programas = []

    dadosDaAPI.programme.entries.forEach(programa => {
        programas.push({
            durationInMinutes: programa.duration_in_minutes,
            description: programa.description,
            startTime: programa.start_time,
            endTime: programa.end_time,
            mediaId: programa.media_id,
            isLive: programa.live_broadcast,
            title: programa.title,
            date: data,
        })
    });

    return programas
}

salvarNoBanco = (programas, afterSave) => {
    
    programas.forEach(programa => {
        Programa.criar(programa)
    })

    afterSave()
}