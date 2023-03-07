<template>
  <div class="page">
    <a-row class="header">
      <div class="box">
        <header-box />
      </div>
      <div class="head_menu">
        <a-dropdown placement="bottomRight">
          <a-icon type="small-dash" style="font-size: 48px; color: #FFF;" />
          <a-menu slot="overlay">
            <a-menu-item>
              <div class="c_white" @click="show = 1">Letter from C3U</div>
            </a-menu-item>
            <a-menu-item>
              <div class="c_white" @click="show = 2">Philosophy</div>
            </a-menu-item>
            <a-menu-item>
              <div class="c_white" @click="show = 3">About</div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-row>
    <a-row class="content">
      <div class="h_100_p pdtp left fl">
        <vue-scroll :ops="ops" class="w_100_p h_100_p">
          <a-row class="title"><li-cor :list="[1, 3, 2]" /></a-row>
          <a-row class="m_t_15">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
              <a-list-item>
                <h2 class="c_white cursor-por font_weiruanyahei" @click="show = 1">Letter from C3U</h2>
              </a-list-item>
              <a-list-item>
                <h2 class="c_white cursor-por font_weiruanyahei" @click="show = 2">Philosophy</h2>
              </a-list-item>
              <a-list-item>
                <h2 class="c_white cursor-por font_weiruanyahei" @click="show = 3">About</h2>
              </a-list-item>
            </a-list>
          </a-row>
          <a-row class="title"><li-cor :list="[1, 3, 2]" /></a-row>
          <a-row class="m_t_15">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
              <a-list-item>
                <a-space><a-icon type="twitter"
                    style="color: #00ffff; border: 1px solid #00ffff;border-radius: 2px;padding:1px 2px;" /><span
                    class="c_a6a6a6 font_weiruanyahei">Twitter</span></a-space>
              </a-list-item>
              <a-list-item>
                <a-space><a-icon type="wechat"
                    style="color: #00ff00; border: 1px solid #00ff00;border-radius: 2px;padding:1px 2px;" /><span
                    class="c_a6a6a6 font_weiruanyahei">WeChat</span></a-space>
              </a-list-item>
              <a-list-item>
                <a-space><a-icon type="mail"
                    style="color: #780808; border: 1px solid #780808;border-radius: 2px;padding:1px 2px;" /><span
                    class="c_a6a6a6 font_weiruanyahei">Contact</span></a-space>
              </a-list-item>
            </a-list>
          </a-row>
        </vue-scroll>
      </div>
      <div class="h_100_p right fr">
        <vue-scroll :ops="ops" class="w_100_p h_100_p">
          <LetterFromc3u-page v-if="show == 1" />
          <philosophy-page v-if="show == 2" />
          <about-page v-if="show == 3" />
        </vue-scroll>
      </div>
    </a-row>
    <a-row class="w_100_p d_n t_c pos-ab m_b_c f_S_24" style="background-color: #000000; position: absolute;">
      <a-col :span="8"><a-icon type="twitter" style="color: #00ffff;" /></a-col>
      <a-col :span="8"><a-icon type="wechat" style="color: #00ff00;" /></a-col>
      <a-col :span="8"><a-icon type="mail" style="color: #780808;" /></a-col>
    </a-row>
  </div>
</template>

<script>
import HeaderBox from '@/components/head'
import LiCor from '@/components/liColor'
import AboutPage from '@/components/page/About'
import PhilosophyPage from '@/components/page/Philosophy'
import LetterFromc3uPage from '@/components/page/LetterFromC3U'
export default {
  name: 'page',
  components: {
    HeaderBox,
    LiCor,
    AboutPage,
    PhilosophyPage,
    LetterFromc3uPage
  },
  data() {
    return {
      show: 3,
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#F5F5F5",//滚动条颜色
          opacity: 0.5,//滚动条透明度
          "overflow-x": "hidden"
        }
      }
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
    height: 115px;
    position: absolute;
    left: 0px;
    top: 20px;
    padding: 15px 3% 0px 3%;

    .box {
      width: 100%;
      height: 100%;
    }
    .head_menu{
      display: none;
    }
  }

  .content {
    width: 100%;
    height: calc(100% - 160px);
    position: absolute;
    left: 0px;
    top: 160px;
    padding: 0px 3% 30px 3%;
    .pdtp{
      padding-top: 3%;
    }
    .left{
      width: 220px;
    }
    .right{
      width: calc(100% - 220px);
    }

    .title {
      width: 10px;
      height: 18px;
    }
  }
}
@media screen and (max-width: 576px){
  .ant-dropdown-menu{background-color: #000000;}
  .ant-dropdown-menu-item-active{
    background-color: #333333;
  }
  .m_b_c{
    left: 0; bottom: 0;
  }
  .d_n{

  }
  .page {
  .header {
    height: 100px;
    top: 5px;
    padding: 5px;
    .box {
      width: 100%;
      height: 100%;
    }
    .head_menu{
      display: block;
      color: #FFF;
      position: absolute;
      right: 20px;
      top: 15px;
      text-align: right;
      
    }
  }

  .content {
    height: calc(100% - 100px);
    top: 100px;
    padding: 0px 10px 50px 10px;
    .pdtp{
      padding-top: 10px;
    }
    .left{
      width: 180px;
      position: absolute;
      display: none;
    }
    .right{
      width: 100%;
    }

    .title {
      width: 10px;
      height: 18px;
    }
  }
}
}
</style>
