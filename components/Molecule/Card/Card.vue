<template>
  <div class="card">
    <div v-if="heading" class="card-header">
      <Content :as="'h2'">{{ heading }}</Content>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="btn" class="card-footer">
      <Button
        :btn-class="btn.btnClass"
        :disabled="btn.disabled"
        @click="btn.click"
      >
        {{ btn.text }}</Button
      >
    </div>
  </div>
</template>
<script src="./card.js"></script>

<style scoped>
.card-header h2 {
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
}
</style>
