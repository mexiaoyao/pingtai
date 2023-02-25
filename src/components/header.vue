<template>
  <div class="logBox">
    <div class="log">
      <letter-table />
    </div>
    <div class="f_S_16 l_h_20 f_f_wryh c_white">
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
    height: calc(100% - 20px);
  }
}
</style>
