import Vue from 'vue'
import { Button, Content } from '../../Atoms/'

export default Vue.extend({
  name: 'Card',
  components: {
    Button,
    Content
  },
  props: {
    btn: {
      type: Object,
      default: null
    },
    heading: {
      type: String,
      default: null
    }
  }
})
