<template>
  <div>
    <h1 class="font_hanyizhegnyuan c_white">About</h1>
    <div class="w_100_p h_100_p" v-if="false">
      <div class="about_cell about">
        <cell :backColorList="ACss" />
      </div>
      <div class="about_cell">
        <cell :backColorList="bCss" />
      </div>
      <div class="about_cell">
        <cell :backColorList="oCss" />
      </div>
      <div class="about_cell">
        <cell :backColorList="uCss" />
      </div>
      <div class="about_cell">
        <cell :backColorList="tCss" />
      </div>
    </div>
  </div>
</template>

<script>
import cellMixins from './mixins/index';
import Cell from './Cell.vue'
export default {
  name: 'about',
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
      this.ACss = [];
      this.creatWord(this.setColr_A, this.ANumList, this.ACss);

      this.bCss = [];
      this.creatWord(this.setColr_b, this.bNumList, this.bCss);

      this.oCss = [];
      this.creatWord(this.setColr_o, this.oNumList, this.oCss);

      this.uCss = [];
      this.creatWord(this.setColr_u, this.uNumList, this.uCss);

      this.tCss = [];
      this.creatWord(this.setColr_t, this.tNumList, this.tCss);

    },
  }
}
</script>
<style scoped lang="less">
.about_cell {
  width: calc(94% / 5);
  height: 100%;
  float: left;
}
</style>
