import Vue from 'vue'
import FilterBox from '~/components/Organism/FilterBox/FilterBox.vue'
import { Button } from '~/components/Atoms/'
import { Formgroup, Card } from '~/components/Molecule/'

export default Vue.extend({
  components: {
    FilterBox,
    Button,
    Formgroup,
    Card
  },
  data() {
    return {
      sortDirection: 'ASC',
      characters: null,
      searchResult: null,
      searchFilter: null,
      rederCharacter: null,
      formLabel: {
        class: 'sr-only'
      },
      formTextbox: {
        placeholder: 'Search by name'
      },
      FormBtn: {
        btnClass: 'btn-outline-secondary',
        text: 'Search',
        click: this.search
      },
      selectedFilters: {
        origin: [],
        gender: [],
        species: []
      }
    }
  },
  computed: {
    filters() {
      return this.$store.getters.filters
    }
  },
  mounted() {
    const getCharacters = this.$store.getters.characters
    this.characters = getCharacters
    this.rederCharacter = getCharacters
    this.searchResult = getCharacters
    this.sortCharacters()
    this.search()
  },
  methods: {
    removeFilter(cat, val) {
      this.selectedFilters[cat].splice(
        this.selectedFilters[cat].indexOf(val),
        1
      )
      document.querySelector(`input[value='${val}']`).checked = false
      this.filterResult()
    },
    selectedFilter(value) {
      if (this.selectedFilters[value[1]].includes(value[0])) {
        this.selectedFilters[value[1]].splice(
          this.selectedFilters[value[1]].indexOf(value[0]),
          1
        )
      } else {
        this.selectedFilters[value[1]].push(value[0])
      }

      this.filterResult()
    },
    search(searchTerm) {
      console.log(1)
      if (searchTerm === '') {
        this.searchResult = this.characters
      } else {
        this.searchResult = this.characters.filter(
          i => i.name.search(searchTerm) >= 0
        )
      }
      this.filterResult()
    },
    sortCharacters() {
      this.rederCharacter.sort(
        function(a, b) {
          if (this.sortDirection === 'ASC') {
            return a.name === b.name ? 0 : a.name > b.name ? 1 : -1
          } else {
            return a.name === b.name ? 0 : a.name < b.name ? 1 : -1
          }
        }.bind(this)
      )
    },
    filterResult() {
      if (this.checkFilter()) this.rederCharacter = this.searchResult
      else {
        this.searchFilter = this.searchResult.filter(i => {
          let filtercondition = false
          for (const key in this.selectedFilters) {
            if (key === 'origin') {
              if (this.selectedFilters[key].includes(i[key].name)) {
                filtercondition = true
              }
            } else if (this.selectedFilters[key].includes(i[key])) {
              filtercondition = true
            }
          }
          if (filtercondition) return i
        })
        this.rederCharacter = this.searchFilter
      }
    },
    checkFilter() {
      let category = true
      for (const key in this.selectedFilters) {
        if (this.selectedFilters[key].length > 0) category = false
      }
      return category
    }
  }
})
