<template>
  <div class="w_100_p h_100_p">
    <div class="letterFromc3u_cell">
      <cell :backColorList="aCss" />
    </div>
    <div class="letterFromc3u_cell">
      <cell :backColorList="bCss" />
    </div>
    <div class="letterFromc3u_cell">
      <cell :backColorList="oCss" />
    </div>
    <div class="letterFromc3u_cell">
      <cell :backColorList="uCss" />
    </div>
    <div class="letterFromc3u_cell">
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
    return {}
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
.letterFromc3u_cell {
  width: calc(94% / 5);
  height: 100%;
  float: left;
  margin: 0px 1%;
}
</style>
