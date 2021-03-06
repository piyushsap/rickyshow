import Vue from 'vue'

export default Vue.extend({
  name: 'Uptions',
  props: {
    textboxClass: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    name: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    handleInput(value) {
      this.$emit('inputVal', value)
    }
  }
})
