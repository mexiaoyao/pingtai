<template>
  <div class="w_100_p h_100_p">
    <div class="philosophy_cell">
      <cell :backColorList="pCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="hCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="iCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="lCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="oCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="sCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="oCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="pCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="hCss" />
    </div>
    <div class="philosophy_cell">
      <cell :backColorList="yCss" />
    </div>
  </div>
</template>

<script>
import cellMixins from './mixins/index';
import Cell from './Cell.vue'
export default {
  name: 'Philosophy',
  mixins: [cellMixins],
  components: {
    Cell
  },
  data() {
    return {}
  },
  created() {
    this.createC()
  },
  methods: {
    createC() {
      Object.assign(this.$data, this.$options.data());
      this.creatWord(this.setColr_p, this.pNumList, this.pCss);
      this.creatWord(this.setColr_h, this.hNumList, this.hCss);
      this.creatWord(this.setColr_i, this.iNumList, this.iCss);
      this.creatWord(this.setColr_l, this.lNumList, this.lCss);
      this.creatWord(this.setColr_o, this.oNumList, this.oCss);
      this.creatWord(this.setColr_s, this.sNumList, this.sCss);
      this.creatWord(this.setColr_y, this.yNumList, this.yCss);
    },
  }
}
</script>
<style scoped lang="less">
.philosophy_cell {
  width: calc((100% - 50px) / 10);
  height: 100%;
  float: left;
  margin-right: 5px;
}
</style>
