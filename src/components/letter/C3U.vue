<template>
  <div class="w_100_p h_100_p">
    <div class="c3u_cell">
      <cell :backColorList="cCss" />
    </div>
    <div class="c3u_cell">
      <cell :backColorList="sCss" />
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
    return {
      cCss: [],
      cNumList: [
        1, 2, 3,
        5, 9,
        10,
        15,
        20,
        25, 29,
        31, 32, 33
      ],
      setColr_c: [
        { num: 5, color: "#00fe00" },
        { num: 9, color: "#ff0101" },
        { num: 33, color: "#0001fc" }
      ],

      sCss: [],
      sNumList: [
        1, 2, 3, 4,
        8,
        12,
        16, 17, 18,
        24,
        25, 29,
        31, 32, 33
      ],
      setColr_s: [
        { num: 5, color: "#0001fc" },
        { num: 17, color: "#ff0101" },
        { num: 26, color: "#00fe00" }
      ],

      uCss: [],
      uNumList: [
        0, 4,
        5, 9,
        10, 14,
        15, 19,
        20, 24,
        25, 29,
        31, 32, 33
      ],
      setColr_u: [
        { num: 1, color: "#00fe00" },
        { num: 32, color: "#ff0101" },
      ],
    }
  },
  created() {
    this.createC()
  },
  methods: {
    createC() {
      this.cCss = [];
      this.sCss = [];
      this.uCss = [];

      let cColorList = this.setColorList(this.cNumList, this.setColr_c)
      this.createLetter(this.cNumList, cColorList, this.cCss);
      this.createMake(this.cNumList, cColorList, this.cCss);

      let sColorList = this.setColorList(this.sNumList, this.setColr_s)
      this.createLetter(this.sNumList, sColorList, this.sCss);
      this.createMake(this.sNumList, sColorList, this.sCss);

      let uColorList = this.setColorList(this.uNumList, this.setColr_u)
      this.createLetter(this.uNumList, uColorList, this.uCss);
      this.createMake(this.uNumList, uColorList, this.uCss);
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
