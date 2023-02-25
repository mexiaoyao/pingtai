<template>
  <div class="page">
    <a-row class="header">
      <div class="box">
        <header-box />
      </div>
    </a-row>
    <a-row class="content">
      <a-col :span="6" class="h_100_p">
        <div class="w_100_p h_100_p ov-y ov-x">
          <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false" class="m_l_20">
            <a-list-item><h2 class="c_white">Letter from C3U</h2></a-list-item>
            <a-list-item><h2 class="c_white">Philosophy</h2></a-list-item>
            <a-list-item><h2 class="c_white">About</h2></a-list-item>
          </a-list>

          <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false" class="m_l_20">
            <a-list-item><h2 class="c_white">Twitter</h2></a-list-item>
            <a-list-item><h2 class="c_white">WeChat</h2></a-list-item>
            <a-list-item><h2 class="c_white">Contact</h2></a-list-item>
          </a-list>
        </div>
      </a-col>
      <a-col :span="18" class="h_100_p">
        <div class="w_100_p h_100_p ov-y ov-x">
          <a-row>
            <a-carousel>
              <div class="w_100_p h_100_p carousel">
                <img :src="banner01">
              </div>
              <div class="w_100_p h_100_p carousel">
                <img :src="banner01">
              </div>
              <div class="w_100_p h_100_p carousel">
                <img :src="banner01">
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
        </div>
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
      banner01: require('@/assets/images/banner.jpg'),
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
    height: calc(100% - 280px);
    position: absolute;
    left: 0px;
    top: 120px;

    .carousel{
      img{
        width:100%;
        height:100%;
      }
    }

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
