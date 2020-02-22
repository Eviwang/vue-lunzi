<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    Array.from(this.$el.children, node => {
      if (node.nodeName !== 'BUTTON') {
        console.warn('g-button-group child should be a g-button.');
      }
    });
  }
};
</script>

<style lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: bottom;
  .g-button {
    border-radius: 0;
    &:hover {
      z-index: 1;
    }
  }
  .g-button:not(first-child) {
    margin-left: -1px;
  }
  .g-button:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  .g-button:last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
}
</style>
