<template>
  <textarea
    v-if="type == 'textarea'"
    :id="id ? id : name"
    :class="textboxClass"
    :type="type"
    class="form-control"
    :placeholder="placeholder"
    :name="name ? name : id"
    :readonly="readonly"
    :disabled="disabled"
    :value="value"
    @input="handleInput($event.target.value)"
  >
  </textarea>
  <input
    v-else
    :id="id ? id : name"
    :class="textboxClass"
    :type="type"
    class="form-control"
    :placeholder="placeholder"
    :name="name ? name : id"
    :readonly="readonly"
    :disabled="disabled"
    :value="value"
    @input="handleInput($event.target.value)"
  />
</template>
<script src="./textbox.js"></script>
