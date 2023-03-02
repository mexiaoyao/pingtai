<template>
  <div>
    <h1 class="font_hanyizhegnyuan c_white">Philosophy</h1>
    <div class="w_100_p h_100_p" v-if="false">
      <div class="philosophy_cell">
        <cell :backColorList="PCss" />
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
      this.creatWord(this.setColr_P, this.PNumList, this.PCss);
      this.creatWord(this.setColr_h, this.hNumList, this.hCss);
      this.creatWord(this.setColr_i, this.iNumList, this.iCss);
      this.creatWord(this.setColr_l, this.lNumList, this.lCss);
      this.creatWord(this.setColr_o, this.oNumList, this.oCss);
      this.creatWord(this.setColr_s, this.sNumList, this.sCss);
      //0
      this.creatWord(this.setColr_p, this.pNumList, this.pCss);
      //h
      this.creatWord(this.setColr_y, this.yNumList, this.yCss);

    },
  }
}
</script>
<style scoped lang="less">
.philosophy_cell {
  width: calc(100% / 13);
  height: 100%;
  float: left;
}
</style>
