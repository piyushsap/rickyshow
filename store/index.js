import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      characters: [],
      filters: {}
    },
    mutations: {
      SET_CHARACTERS(state, characters) {
        state.characters = characters
      },
      SET_FILTER(state, filters) {
        state.filters = filters
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(res => {
            if (res.data) {
              const characters = res.data.results
              const speciesMap = characters.map(i => i.species)
              const species = speciesMap.filter(
                (v, i) => speciesMap.indexOf(v) === i
              )
              const genderMap = characters.map(i => i.gender)
              const gender = genderMap.filter(
                (v, i) => genderMap.indexOf(v) === i
              )
              const originMap = characters.map(i => i.origin.name)
              const origin = originMap.filter(
                (v, i) => originMap.indexOf(v) === i
              )
              const filters = [
                { heading: 'origin', options: origin },
                { heading: 'gender', options: gender },
                { heading: 'species', options: species }
              ]
              vuexContext.commit('SET_CHARACTERS', characters)
              vuexContext.commit('SET_FILTER', filters)
            }
          })
          .catch(e => context.error(e))
      }
    },
    getters: {
      characters: state => {
        return state.characters
      },
      filters: state => {
        return state.filters
      }
    }
  })
}

export default createStore
