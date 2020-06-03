import Vue from 'vue'

export default Vue.extend({
  name: 'List',
  props: {
    as: {
      type: String,
      default: 'ul'
    },
    listClass: {
      type: String,
      default: null
    }
  }
})
