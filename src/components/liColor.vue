<template>
  <div class="title">
    <div class="li" v-for="item in list" :key="item" :style="styleMet(item)"></div>
  </div>
</template>
<script>
export default {
  name: 'li-color',
  props:{
    list:{
      type:Array,
      default:()=>{
        return [1,2,3]
      }
    }
  },
  methods: {
    styleMet(i){
        return {
            backgroundColor: this.switchColor(i),
            width:'100%',
            height: 'calc(100% / ' + this.list.length + ')'
        }
    },
    switchColor(num){
      switch (num) {
        case 1 :
          return "#ff0101";
        case 2 :
          return "#0001fc";
        case 3 :
          return "#00fe00";  
      }
    }
  }
}
</script>
<style scoped lang="less">
.title {
  width: 100%;
  height: 100%;
  .li::before{
    content: "";
    display: block;
  }
}
</style>
