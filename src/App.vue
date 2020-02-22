<template>
  <div>
    <g-button icon="set" :loading="loading1" @click="loading1 = !loading1">
      按钮
    </g-button>
    <g-button icon="favorites-fill">按钮</g-button>
    <g-button icon="upload" icon-position="right">按钮</g-button>
    <g-button-group>
      <g-button icon="arrow-lift">First</g-button>
      <g-button>2</g-button>
      <g-button>3</g-button>
      <g-button icon="arrow-right" icon-position="right">Last</g-button>
    </g-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false
    };
  }
};
</script>

<style lang="scss">
body {
  padding: 20px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 1em;
  height: 1em;
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
</style>
