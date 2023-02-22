<template>
  <div class="logBox">
    <div class="log">
      <letter-table />
    </div>
    <div class="logDes">
      I SEE you in a new web
    </div>
  </div>
</template>

<script>
import LetterTable from './LetterAll.vue'
export default {
  name: "page",
  components: { LetterTable },
};
</script>
<style scoped lang="less">
.logBox {
  width: 100%;
  height: 100%;

  .log {
    width: 160px;
    height: 80px;
    margin: 20px 0px 10px 20px;
  }

  .logDes {
    font: 16px/32px "微软雅黑";
    color: #FFF;
    margin-left: 15px;
  }
}
</style>
