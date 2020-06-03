<template>
  <component
    :is="as"
    class="btn"
    :class="btnClass"
    :type="href || type === 'button' ? null : type"
    :href="href"
    :disabled="disabled ? false : disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>
<script src="./buttons.js"></script>
