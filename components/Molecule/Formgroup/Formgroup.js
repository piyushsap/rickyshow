import Vue from 'vue'
import { Textbox, Content, Button } from '../../Atoms'

export default Vue.extend({
  name: 'Formgroup',
  components: {
    Textbox,
    Content,
    Button
  },
  props: {
    textbox: {
      type: Object,
      default: null
    },
    btn: {
      type: Object,
      default: null
    },
    label: {
      type: Object,
      default: null
    },
    groupClass: {
      type: String,
      default: 'formgroup'
    }
  },
  computed: {
    inputgroup() {
      return this.groupClass.search('input-group')
    }
  },
  methods: {
    getInput(value) {
      this.$emit('inputVal', value)
    }
  }
})
