<template>
  <div class="log_box cursor-por" @click="$router.push('/')">
    <div class="log_head m_l_05">
      <C3u />
    </div>
    <div class="f_S_16 l_h_20 f_f_wryh c_white m_t_10">
      I SEE you in a new web
    </div>
  </div>
</template>

<script>
import C3u from '@/components/letter/C3U.vue'
export default {
  name: "header",
  components: { C3u },
};
</script>
<style scoped lang="less">
.log_box {
  width: 100%;
  height: 100%;

  .log_head {
    width: 140px;
    height: calc(100% - 30px);
  }
}
</style>
