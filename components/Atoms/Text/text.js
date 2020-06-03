import Vue from 'vue'

export default Vue.extend({
  name: 'Content',
  props: {
    textClass: {
      type: String,
      default: null
    },
    tagFor: {
      type: String,
      default: null
    },
    as: {
      type: String,
      default: null
    }
  },
  computed: {
    htmlTag() {
      return this.as ? this.as : 'p'
    }
  }
})
