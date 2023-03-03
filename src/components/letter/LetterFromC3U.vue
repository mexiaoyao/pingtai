<template>
  <div class="w_100_p h_100_p">
    <!----LETTER-->
    <div class="w_60_p h_50_p_5px">
      <div class="w_100_p h_100_p">
        <div class="letterFromc3u_letter_cell">
          <cell :backColorList="lCss" />
        </div>
        <div class="letterFromc3u_letter_cell">
          <cell :backColorList="eCss" />
        </div>
        <div class="letterFromc3u_letter_cell">
          <cell :backColorList="tCss" />
        </div>
        <div class="letterFromc3u_letter_cell">
          <cell :backColorList="tCss" />
        </div>
        <div class="letterFromc3u_letter_cell">
          <cell :backColorList="eCss" />
        </div>
        <div class="letterFromc3u_letter_cell">
          <cell :backColorList="rCss" />
        </div>
      </div>
    </div>
    <!----FROM C3U-->
    <div class="w_100_p h_50_p_5px m_t_10">
      <!----FROM-->
      <div class="w_50_p h_100_p fl">
        <div class="w_100_p h_100_p">
          <div class="letterFromc3u_from_cell">
            <cell :backColorList="fCss" />
          </div>
          <div class="letterFromc3u_from_cell">
            <cell :backColorList="rCss" />
          </div>
          <div class="letterFromc3u_from_cell">
            <cell :backColorList="oCss" />
          </div>
          <div class="letterFromc3u_from_cell">
            <cell :backColorList="mCss" />
          </div>
        </div>
      </div>
      <!----C3U-->
      <div class="w_40_p h_100_p fr">
        <div class="w_100_p h_100_p">
          <div class="letterFromc3u_c3u_cell">
            <cell :backColorList="cCss" />
          </div>
          <div class="letterFromc3u_c3u_cell">
            <cell :backColorList="s3Css" />
          </div>
          <div class="letterFromc3u_c3u_cell">
            <cell :backColorList="uCss" />
          </div>
        </div>
      </div>
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
      Object.assign(this.$data, this.$options.data());
      this.creatWord(this.setColr_l, this.lNumList, this.lCss);
      this.creatWord(this.setColr_e, this.eNumList, this.eCss);
      this.creatWord(this.setColr_t, this.tNumList, this.tCss);
      this.creatWord(this.setColr_r, this.rNumList, this.rCss);

      this.creatWord(this.setColr_f, this.fNumList, this.fCss);
      this.creatWord(this.setColr_r, this.rNumList, this.rCss);
      this.creatWord(this.setColr_o, this.oNumList, this.oCss);
      this.creatWord(this.setColr_m, this.mNumList, this.mCss);

      this.creatWord(this.setColr_c, this.cNumList, this.cCss);
      this.creatWord(this.setColr_s3, this.s3NumList, this.s3Css);
      this.creatWord(this.setColr_u, this.uNumList, this.uCss);
    },
  }
}
</script>
<style scoped lang="less">
.letterFromc3u_letter_cell {
  width: calc((100% - 30px) / 6);
  height: 100%;
  float: left;
  margin-right: 5px;
}

.letterFromc3u_from_cell {
  width: calc((100% - 20px) / 4);
  height: 100%;
  float: left;
  margin-right: 5px;
}

.letterFromc3u_c3u_cell {
  width: calc((100% - 15px) / 3);
  height: 100%;
  float: left;
  margin-right: 5px;
}

.h_50_p_5px {
  height: calc(50% - 5px);
}
</style>
