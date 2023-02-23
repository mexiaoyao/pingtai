<template>
  <div class="page">
    <a-row class="header">
      <div class="box">
        <header-box />
      </div>
    </a-row>
    <a-row class="content">
      <a-col :span="6">
        <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
          <a-list-item><span class="c_white">Letter from C3U</span></a-list-item>
          <a-list-item><span class="c_white">Philosophy</span></a-list-item>
          <a-list-item><span class="c_white">About</span></a-list-item>
        </a-list>

        <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
          <a-list-item><span class="c_white">Twitter</span></a-list-item>
          <a-list-item><span class="c_white">WeChat</span></a-list-item>
          <a-list-item><span class="c_white">Contact</span></a-list-item>
        </a-list>
      </a-col>
      <a-col :span="18">
        <a-row>
          <a-carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </a-carousel>
        </a-row>
        <a-row :gutter="[16, 16]">
          <a-col :span="12">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
              <a-list-item><span
                  class="c_white">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></a-list-item>
              <a-list-item><span
                  class="c_white">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></a-list-item>
              <a-list-item><span
                  class="c_white">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></a-list-item>
            </a-list>
          </a-col>
          <a-col :span="12">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
              <a-list-item><span
                  class="c_white">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></a-list-item>
              <a-list-item><span
                  class="c_white">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></a-list-item>
              <a-list-item><span
                  class="c_white">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span></a-list-item>
            </a-list>
          </a-col>
        </a-row>
      </a-col>
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

    .ant-carousel ::deep .slick-slide {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }

    .ant-carousel ::deep .slick-slide h3 {
      color: #fff;
    }
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
