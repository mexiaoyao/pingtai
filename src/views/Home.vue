<template>
  <div class="home">
    <div class="homeBox">
      <letter-table />
    </div>
    <div class="homeFont">
      I SEE you in a new web
    </div>
    <div class="enterBox" @click="$router.push('/page')">
      <div class="buttonSelf">
        Enter<a-divider type="vertical" :dashed="true" style="border: 1px dashed #FFF;" /><a-icon type="arrow-right" style="font-size: 16px;" />
      </div>
      <div class="buttonCor">
        <div style="background-color: #ff0101;"></div>
        <div style="background-color: #00fe00;"></div>
        <div style="background-color: #0001fc;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LetterTable from '@/components/LetterAll.vue'

export default {
  name: 'home',
  components: {
    LetterTable
  },
}
</script>
<style scoped lang="less">
.home{
  width:100%;
  height:100%;
  position:relative;
  .homeBox{
    position:absolute;
    width:320px;
    height:160px;
    top: calc(50% - 100px);
    left: calc(50% - 160px);
  }
  .homeFont{
    position:absolute;
    width:500px;
    top:calc(50% + 80px);
    left: calc(50% - 250px);
    color:#FFF;
    font:42px/50px "黑体";
    text-align:center;
  }
  .enterBox{
    position:absolute;
    width:110px;
    top:calc(50% + 150px);
    left: calc(50% - 50px);
    cursor: pointer;
    .buttonSelf{
      color:#FFF;
      font:20px/32px "黑体";
      background-color: #595959;
      padding: 2px 10px;
      float: left;
    }
    .buttonCor{
      float: left;
      div{
        width:5px;
        height:5px;
      }
    }
  }
}
</style>
