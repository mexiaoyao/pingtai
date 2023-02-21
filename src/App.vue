<template>
  <div id="app" :style="{backgroundImage:'url('+bg+')'}">
    <MoreStar/>
    <router-view/>
  </div>
</template>
<script>
import MoreStar from '@/components/moreStar.vue'
export default {
  name: 'app',
  components: {
    MoreStar
  },
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
