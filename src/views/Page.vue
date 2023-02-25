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
          <a-row class="title"><li-cor :list="[1,3]" /></a-row>
          <a-row class="m_t_15">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false" class="m_l_20">
              <a-list-item><h2 class="c_white">Letter from C3U</h2></a-list-item>
              <a-list-item><h2 class="c_white">Philosophy</h2></a-list-item>
              <a-list-item><h2 class="c_white">About</h2></a-list-item>
            </a-list>
          </a-row>
          <a-row class="title"><li-cor :list="[1,3]" /></a-row>
          <a-row class="m_t_15">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
              <a-list-item><p class="c_white"><a-icon type="twitter" /> Twitter</p></a-list-item>
              <a-list-item><p class="c_white"><a-icon type="wechat" /> WeChat</p></a-list-item>
              <a-list-item><p class="c_white"><a-icon type="qq" /> Contact</p></a-list-item>
            </a-list>
          </a-row>
        </div>
      </a-col>
      <a-col :span="18" class="h_100_p over_scr_s">
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
import LiCor from '@/components/liColor'
export default {
  name: 'page',
  components: {
    HeaderBox,
    FooterBox,
    LiCor
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
    width: 94%;
    height: 105px;
    position: absolute;
    left: 0px;
    top: 0px;
    padding:15px 3% 15px 3%;

    .box {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    width: 94%;
    height: calc(100% - 280px);
    position: absolute;
    left: 0px;
    top: 120px;
    padding:0px 3%;
    .title{
      width: 5px;
      height: 10px;
    }
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
    width: 94%;
    height: 160px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding:0px 3%;
  }
}
</style>
