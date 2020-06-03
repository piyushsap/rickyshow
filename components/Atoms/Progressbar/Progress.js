import Vue from 'vue'
export default Vue.extend({
  name: 'Progressbar',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    progressBarClass: {
      type: String,
      default: 'progress-bar-striped'
    }
  }
})
