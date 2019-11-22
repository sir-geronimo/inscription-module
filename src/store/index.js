import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      logged: false,
      username: '',
      password: ''
    },
    subjects: [
      {
        'name': 'Redacción I',
        'code': 'ESP101',
        'teacher': 'Pepe Agallas'
      },
      {
        'name': 'Ingeniería de requisitos',
        'code': 'ISO500',
        'teacher': 'Pepe Acosta'
      },
      {
        'name': 'Matemáticas básicas',
        'code': 'MAT126',
        'teacher': 'Pepe Permuy'
      },
      {
        'name': 'Gestión de sitios web',
        'code': 'ISO310',
        'teacher': 'Juan Aquino'
      },
    ],
    enrolledSubjects: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
