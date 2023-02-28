<template>
  <div class="w_100_p h_100_p">
    <div class="about_cell about">
      <cell :backColorList="aCss" />
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
    return {
      aCss: [],
      aNumList: [
          2, 
        5,        
        11,
        16,
        21,
        26, 30,
        32, 33, 34
      ],
      setColr_a: [
        { num: 2, color: "#ff0101" },
      ],

      bCss: [],
      bNumList: [
        2, 3, 4, 5,
        9,
        13,
        17, 18, 19,
        25,
        26, 30,
        32, 33, 34
      ],
      bColorList: [
      ],

      oCss: [],
      oNumList: [
        1, 5,
        6, 10,
        11, 15,
        16, 20,
        21, 25,
        26, 30,
        32, 33, 34
      ],
      oColorList: [
      ],

      uCss: [],
      uNumList: [
        1, 5,
        6, 10,
        11, 15,
        16, 20,
        21, 25,
        26, 30,
        32, 33, 34
      ],
      uColorList: [
      ],

      tCss: [],
      tNumList: [
        1, 5,
        6, 10,
        11, 15,
        16, 20,
        21, 25,
        26, 30,
        32, 33, 34
      ],
      tColorList: [
      ],
    }
  },
  created() {
    this.createC()
  },
  methods: {
    createC() {
      this.aCss = [];

      let aColorList = this.setColorList(this.aNumList, this.setColr_a)
      debugger;
      this.createLetter(this.aNumList, aColorList, this.cCss);
      this.createMake(this.aNumList, aColorList, this.cCss);

      // this.createLetter(this.sNumList, this.sColorList, this.sCss);
      // this.createMake(this.sNumList, this.sColorList, this.sCss);

      // this.createLetter(this.uNumList, this.uColorList, this.uCss);
      // this.createMake(this.uNumList, this.uColorList, this.uCss);
    },


    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    },
  }
}
</script>
<style scoped lang="less">
.about_cell {
  width: calc(94% / 5);
  height: 100%;
  float: left;
  margin: 0px 1%;
}
</style>
