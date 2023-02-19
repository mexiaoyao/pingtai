<template>
  <div class="LetterTableBox">
    <div class="box" v-for="i in 35" :key="i" :style="{backgroundColor:backColor(i)}"></div>
  </div>
</template>

<script>
export default {
  name: 'letter-table',
  props: {
    backColorList:{
      type: Array,
      default:[]
    }
  },
  methods: {
    backColor(i){
      if(null==this.backColorList || this.backColorList.length==35 ){
        return this.backColorList[i] || "none";
      }else{
        return "none";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.LetterTableBox{
  width: 100%;
  height: 100%;
  .box{
    width: 20%;
    height: calc(100% / 7);
    float: left;
  }
}
</style>
