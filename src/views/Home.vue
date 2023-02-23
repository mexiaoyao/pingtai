<template>
  <div class="home">
    <div class="home_box">
      <letter-table />
    </div>
    <div class="home_font c_white">
      I SEE you in a new web
    </div>
    <div class="enter_box" @click="$router.push('/page')">
      <div class="button_cli">
        Enter<a-divider type="vertical" :dashed="true" style="border: 1px dashed #FFF;" /><a-icon type="arrow-right" style="font-size: 16px;" />
      </div>
      <div class="button_cor">
        <div class="c_ff0101"></div>
        <div class="c_00fe00"></div>
        <div class="c_0001fc"></div>
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
  .home_box{
    position:absolute;
    width:320px;
    height:160px;
    top: calc(50% - 100px);
    left: calc(50% - 160px);
  }
  .home_font{
    position:absolute;
    width:500px;
    top:calc(50% + 80px);
    left: calc(50% - 250px);
    font:42px/50px "黑体";
    text-align:center;
  }
  .enter_box{
    position:absolute;
    width:110px;
    top:calc(50% + 150px);
    left: calc(50% - 50px);
    cursor: pointer;
    .button_cli{
      color:#FFF;
      font:20px/32px "黑体";
      background-color: #595959;
      padding: 2px 10px;
      float: left;
    }
    .button_cor{
      float: left;
      div{
        width:5px;
        height:5px;
      }
    }
  }
}
</style>
