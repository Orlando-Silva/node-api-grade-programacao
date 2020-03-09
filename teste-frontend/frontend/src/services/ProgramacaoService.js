import axios from 'axios'

const urlBase = 'http://localhost:3000/programas/'

export default {
  buscarProgramacao: data => {
    axios.get(`${urlBase}${data}`, 
    {
      headers: {
        'Access-Control-Allow-Origin' : '*',
      }
    }
  ).then(resp => {
      console.log(resp)
      return resp.data
    })
  }
}
