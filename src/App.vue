<template>
  <div id="app" :style="{backgroundImage:'url('+bg+')'}">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      bg: require('./assets/images/bj.jpg'),
    }
  }
}
</script>
<style lang="less">
html, body, #app{
  width:100%;
  height:100%;
  overflow: hidden;
}
</style>
