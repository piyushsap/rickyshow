import Vue from 'vue'

export default Vue.extend({
  name: 'Textbox',
  props: {
    textboxClass: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Type here'
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
