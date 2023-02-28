<template>
  <div class="w_100_p h_100_p">
    <div class="about_cell">
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
  name: 'c3u',
  mixins: [cellMixins],
  components: {
    Cell
  },
  data() {
    return {
      aCss: [],
      aNumList: [
        2, 3, 4,
        6, 10,
        11,
        16,
        21,
        26, 30,
        32, 33, 34
      ],
      aColorList: [
        "#707070", //灰色2
        "#707070", //灰色3
        "#707070", //灰色4
        "#00fe00", //银光绿6
        "#707070", //灰色10
        "#707070", //灰色11
        "#707070", //灰色16
        "#707070", //灰色21
        "#ff0101", //红色26
        "#707070", //灰色30
        "#707070", //灰色32
        "#707070", //灰色33
        "#0001fc", //蓝色34
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
        "#707070", //灰色2
        "#707070", //灰色3
        "#707070", //灰色4
        "#0001fc", //蓝色5
        "#707070", //灰色9
        "#707070", //灰色13
        "#ff0101", //红色17
        "#707070", //灰色18
        "#707070", //灰色19
        "#707070", //灰色25
        "#00fe00", //银光绿26
        "#707070", //灰色30
        "#707070", //灰色32
        "#707070", //灰色33
        "#707070", //灰色34
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
        "#707070", //灰色1
        "#00fe00", //银光绿5
        "#707070", //灰色6
        "#707070", //灰色10
        "#707070", //灰色11
        "#707070", //灰色15
        "#707070", //灰色16
        "#707070", //灰色20
        "#707070", //灰色21
        "#707070", //灰色25
        "#707070", //灰色26
        "#707070", //灰色30
        "#ff0101", //红色32
        "#707070", //灰色33
        "#707070", //灰色34
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
        "#707070", //灰色1
        "#00fe00", //银光绿5
        "#707070", //灰色6
        "#707070", //灰色10
        "#707070", //灰色11
        "#707070", //灰色15
        "#707070", //灰色16
        "#707070", //灰色20
        "#707070", //灰色21
        "#707070", //灰色25
        "#707070", //灰色26
        "#707070", //灰色30
        "#ff0101", //红色32
        "#707070", //灰色33
        "#707070", //灰色34
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
        "#707070", //灰色1
        "#00fe00", //银光绿5
        "#707070", //灰色6
        "#707070", //灰色10
        "#707070", //灰色11
        "#707070", //灰色15
        "#707070", //灰色16
        "#707070", //灰色20
        "#707070", //灰色21
        "#707070", //灰色25
        "#707070", //灰色26
        "#707070", //灰色30
        "#ff0101", //红色32
        "#707070", //灰色33
        "#707070", //灰色34
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

      this.createLetter(this.cNumList, this.cColorList, this.cCss);
      this.createMake(this.cNumList, this.cColorList, this.cCss);

      this.createLetter(this.sNumList, this.sColorList, this.sCss);
      this.createMake(this.sNumList, this.sColorList, this.sCss);

      this.createLetter(this.uNumList, this.uColorList, this.uCss);
      this.createMake(this.uNumList, this.uColorList, this.uCss);
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
