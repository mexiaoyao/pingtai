<template>
  <div class="letter_box w_100_p h_100_p">
    <div class="box" v-for="i in 35" :key="i" :style="{ backgroundColor: backColor(i - 1) }"></div>
  </div>
</template>

<script>
export default {
  name: 'letter-table',
  props: {
    backColorList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    backColor(i) {
      if (null == this.backColorList || this.backColorList.length == 35) {
        return this.backColorList[i] || "none";
      } else {
        return "none";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.letter_box {
  .box {
    width: 20%;
    height: calc(100% / 7);
    float: left;
    margin: 0px;
    padding: 0px;
  }
}
</style>
