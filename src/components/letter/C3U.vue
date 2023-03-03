<template>
  <div class="w_100_p h_100_p">
    <div class="c3u_cell">
      <cell :backColorList="cCss" />
    </div>
    <div class="c3u_cell">
      <cell :backColorList="s3Css" />
    </div>
    <div class="c3u_cell">
      <cell :backColorList="uCss" />
    </div>
  </div>
</template>

<script>
import cellMixins from './mixins/index';
import Cell from './Cell.vue'
export default {
  name: 'c3u',
  components: {
    Cell
  },
  mixins: [cellMixins],
  data() {
    return {}
  },
  created() {
    this.createC()
  },
  methods: {
    createC() {
      Object.assign(this.$data, this.$options.data());
      this.creatWord(this.setColr_c, this.cNumList, this.cCss);
      this.creatWord(this.setColr_s3, this.s3NumList, this.s3Css);
      this.creatWord(this.setColr_u, this.uNumList, this.uCss);
    },

  }
}
</script>
<style scoped lang="less">
.c3u_cell {
  width: calc(94% / 3);
  height: 100%;
  float: left;
  margin: 0px 1%;
}
</style>
