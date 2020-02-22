<template>
  <button @click="$emit('click')" class="g-button" :class="{ [iconPosition]: true }">
    <g-icon v-if="loading" class="loading" icon="loading"></g-icon>
    <g-icon v-if="icon && !loading" :icon="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      default: ''
    },
    loading: false,
    iconPosition: {
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
</script>

<style lang="scss">
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  background: var(--button-bg);
  border-radius: var(--border-radius);
  color: var(--color);
  border: 1px solid var(--border-color);
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  .icon {
    margin-right: 0.3em;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
  .loading {
    animation: spin infinite 2s linear;
  }
  &.right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
    outline: none;
  }
  &:active {
    background: var(--button-active-bg);
  }
}
</style>
