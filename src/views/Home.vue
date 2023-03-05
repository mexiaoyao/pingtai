<template>
  <div class="home">
    <div class="home_box">
      <C3u />
    </div>
    <div class="home_font c_white">
      I SEE you in a new web
    </div>
    <div class="enter_box" @click="$router.push('/page')">
      <div class="button_cli">
        Enter<a-divider type="vertical" :dashed="true" style="border: 1px dashed #FFF;" /><a-icon type="arrow-right"
          style="font-size: 16px;" />
      </div>
      <div class="button_cor">
        <div class="c_b_ff0101"></div>
        <div class="c_b_00fe00"></div>
        <div class="c_b_0001fc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import C3u from '@/components/letter/C3U.vue'

export default {
  name: 'home',
  components: {
    C3u
  },
}
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  position: relative;

  .home_box {
    position: absolute;
    width: 320px;
    height: 160px;
    top: calc(50% - 100px);
    left: calc(50% - 160px);
  }

  .home_font {
    position: absolute;
    width: 500px;
    top: calc(50% + 80px);
    left: calc(50% - 250px);
    font: 42px/50px "黑体";
    text-align: center;
  }

  .enter_box {
    position: absolute;
    width: 110px;
    top: calc(50% + 150px);
    left: calc(50% - 50px);
    cursor: pointer;

    .button_cli {
      color: #FFF;
      font: 20px/32px "黑体";
      background-color: #595959;
      padding: 2px 10px;
      float: left;
    }

    .button_cor {
      float: left;

      div {
        width: 5px;
        height: 5px;
      }
    }
  }
}
@media screen and (max-width: 576px){
  .home {
  .home_box {
    width: 200px;
    height: 100px;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }

  .home_font {
    width: 360px;
    top: calc(50% + 30px);
    left: calc(50% - 180px);
    font: 26px/36px "黑体";
  }

  .enter_box {
    width: 100px;
    top: calc(50% + 100px);
    left: calc(50% - 52px);

    .button_cli {
      font: 18px/32px "黑体";
      padding: 2px 8px;
    }
  }
}
}
</style>
