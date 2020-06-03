import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    btnClass: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    as: {
      type: String,
      default: 'button'
    }
  }
})
