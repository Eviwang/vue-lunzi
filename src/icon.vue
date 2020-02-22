<template>
  <svg class="icon" v-if="icon">
    <use :xlink:href="`#icon-i-${icon}`" />
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      default: '',
      required: true
    }
  }
};
</script>

<style></style>
