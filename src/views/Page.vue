<template>
  <div class="page">
    <a-row class="header">
      <div class="box">
        <header-box />
      </div>
    </a-row>
    <a-row class="content">

    </a-row>
    <a-row class="footer">
      <footer-box />
    </a-row>
  </div>
</template>

<script>
import HeaderBox from '@/components/header'
import FooterBox from '@/components/footer'
export default {
  name: 'page',
  components: {
    HeaderBox,
    FooterBox
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
.page {
  width: 100%;
  height: 100%;
  position: relative;

  .header {
    width: 100%;
    height: 120px;
    position: absolute;
    left: 0px;
    top: 0px;

    .box {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    width: 100%;
    height: calc(100% -240px);
    position: absolute;
    left: 0px;
    top: 120px;
  }

  .footer {
    width: 100%;
    height: 160px;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
}
</style>
