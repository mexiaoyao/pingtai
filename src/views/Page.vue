<template>
  <div class="page">
    <a-row class="header">
      <div class="box">
        <header-box />
      </div>
    </a-row>
    <a-row class="content">
      <a-col :span="6" class="h_100_p">
        <vue-scroll :ops="ops" class="w_100_p h_100_p">
          <a-row class="title"><li-cor :list="[1, 3, 2]" /></a-row>
          <a-row class="m_t_15">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false" class="m_l_20">
              <a-list-item>
                <h2 class="c_white cursor-por font_hanyifenggukaiti" @click="show = 1">Letter from C3U</h2>
              </a-list-item>
              <a-list-item>
                <h2 class="c_white cursor-por" @click="show = 2">Philosophy</h2>
              </a-list-item>
              <a-list-item>
                <h2 class="c_white cursor-por" @click="show = 3">About</h2>
              </a-list-item>
            </a-list>
          </a-row>
          <a-row class="title"><li-cor :list="[1, 3, 2]" /></a-row>
          <a-row class="m_t_15">
            <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
              <a-list-item>
                <p class="c_white"><a-icon type="twitter" /> Twitter</p>
              </a-list-item>
              <a-list-item>
                <p class="c_white"><a-icon type="wechat" /> WeChat</p>
              </a-list-item>
              <a-list-item>
                <p class="c_white"><a-icon type="qq" /> Contact</p>
              </a-list-item>
            </a-list>
          </a-row>
        </vue-scroll>
      </a-col>
      <a-col :span="18" class="h_100_p">
        <vue-scroll :ops="ops" class="w_100_p h_100_p">
          <LetterFromc3u-page v-if="show == 1" />
          <philosophy-page v-if="show == 2" />
          <about-page v-if="show == 3" />
        </vue-scroll>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HeaderBox from '@/components/header'
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
      show: 1,
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
    width: 94%;
    height: 105px;
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 15px 3% 15px 3%;

    .box {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    width: 94%;
    height: calc(100% - 120px);
    position: absolute;
    left: 0px;
    top: 120px;
    padding: 0px 3%;

    .title {
      width: 10px;
      height: 18px;
    }

    // 滚动条位置
    /deep/.__bar-is-vertical {
      right: -1px !important;
    }

    // 隐藏横向滚动条
    /deep/.__bar-is-horizontal {
      display: none !important;
    }
  }
}
</style>
