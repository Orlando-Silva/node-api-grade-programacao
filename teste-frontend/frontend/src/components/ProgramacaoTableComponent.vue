<template>
  <section>
    <div class="columns">
      <div class="column">
        <b-field label="Data">
            <b-input v-mask="'###-##-##'" v-model="dataDeBusca"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-button @click="buscarProgramacao()" class="col-xs-6" type="is-success">Buscar Programas</b-button>
      </div>
    </div>
    <div class="col-xs-12">
      <b-table :data="data" :columns="columns"></b-table>
    </div>
  </section>  
</template>

<script>
import ProgramacaoService from '../services/ProgramacaoService'

export default {
  data() {
      return {
        dataDeBusca: null,
        data: [],
          columns: [
            {
                title: 'title',
                label: 'Título',
                width: '40',
                numeric: false
            },
            {
                field: 'description',
                label: 'Descrição',
            },
            {
                field: 'startTime',
                label: 'Começa',
            },
            {
                field: 'endTime',
                label: 'Termina',
            },
            {
                field: 'durationInMinutes',
                label: 'Duração',
            },
            {
                field: 'isLive',
                label: 'Ao Vivo?',
            },
          ]
      }
  },
  methods: {
    buscarProgramacao() {
      let resposta = ProgramacaoService.buscarProgramacao('2020-03-03')
      this.data = resposta
    }
  }
}
</script>

<style>

</style>