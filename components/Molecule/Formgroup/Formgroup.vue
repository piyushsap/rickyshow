<template>
  <div :class="groupClass">
    <Content
      v-if="label"
      :as="label.as ? label.as : 'label'"
      :text-class="label.class"
      :tag-for="textbox.id ? textbox.id : textbox.name"
    >
      <slot></slot>
    </Content>

    <Textbox
      v-if="textbox"
      :id="textbox.id ? textbox.id : textbox.name"
      :class="textbox.textboxClass"
      :type="textbox.type"
      :placeholder="textbox.placeholder"
      :aria-label="textbox.placeholder"
      :name="textbox.name ? textbox.name : textbox.id"
      :readonly="textbox.readonly"
      :disabled="textbox.disabled"
      :value="textbox.value"
      @inputVal="getInput"
    ></Textbox>
    <div :class="inputgroup === 0 ? 'input-group-append' : null">
      <Button
        v-if="btn"
        :btn-class="btn.btnClass"
        :disabled="btn.disabled"
        @click="btn.click"
      >
        {{ btn.text }}</Button
      >
    </div>
  </div>
</template>
<script src="./Formgroup.js"></script>
