<template>
  <div
    v-if="type === 'radio' || type === 'checkbox'"
    class="custom-control"
    :class="type === 'radio' ? 'custom-radio' : 'custom-checkbox'"
  >
    <input
      :id="id ? id : name"
      :class="textboxClass"
      :type="type"
      class="custom-control-input"
      :name="name ? name : id"
      :readonly="readonly"
      :disabled="disabled"
      :value="value"
      @click="$emit('click')"
    />
    <label class="custom-control-label" :for="id ? id : name">
      <slot>{{ value }}</slot>
    </label>
  </div>
</template>
<script src="./Options.js"></script>
