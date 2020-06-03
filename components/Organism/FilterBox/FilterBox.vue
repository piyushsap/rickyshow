<template>
  <div class="filter-box" :class="filterboxClass">
    <Content v-if="heading" :text-class="heading.class" :as="heading.tag">{{
      heading.text
    }}</Content>

    <Options
      v-for="(opt, index) in optionsval"
      :id="heading.text + index"
      :key="index"
      :value="opt"
      :name="heading.text"
      @click="selectedFilter(opt, heading.text)"
      >{{ opt }}</Options
    >
  </div>
</template>
<script>
import { Content, Options } from '../../Atoms'
export default {
  name: 'FilterBox',
  components: {
    Content,
    Options
  },
  props: {
    heading: {
      type: Object,
      default: null
    },
    filterboxClass: {
      type: String,
      default: null
    },
    optionsval: {
      type: Array,
      default: null
    }
  },
  methods: {
    selectedFilter(value, category) {
      this.$emit('selected', [value, category])
    }
  }
}
</script>
