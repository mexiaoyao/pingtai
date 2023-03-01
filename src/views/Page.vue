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
                <h2 class="c_white cursor-por">Letter from C3U</h2>
              </a-list-item>
              <a-list-item>
                <h2 class="c_white cursor-por">Philosophy</h2>
              </a-list-item>
              <a-list-item>
                <h2 class="c_white cursor-por">About</h2>
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
          <a-row>
            <div style="width:500px; height:100px;">
              <about />
            </div>
            <div style="width:500px; height:100px; margin-top: 20px;">
              <Philosophy />
            </div>
            <div style="width:500px; height:100px; margin-top: 20px;">
              <LetterFromC3U />
            </div>
          </a-row>
          <a-row :gutter="[16, 16]">
            <a-col :span="12">
              <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                <template v-for="(item, index) in list">
                  <a-list-item :key="index"><span class="c_white">{{ index + 1 }}、{{ item.title }}</span></a-list-item>
                </template>
              </a-list>
            </a-col>
            <a-col :span="12">
              <a-list :grid="{ gutter: 16, column: 1 }" :bordered="false">
                <template v-for="(item, index) in list1">
                  <a-list-item :key="index"><span class="c_white">{{ index + 1 }}、{{ item.title }}</span></a-list-item>
                </template>
              </a-list>
            </a-col>
          </a-row>
        </vue-scroll>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HeaderBox from '@/components/header'
import LiCor from '@/components/liColor'
import About from '@/components/letter/About'
import Philosophy from '@/components/letter/Philosophy'
import LetterFromC3U from '@/components/letter/LetterFromC3U'
export default {
  name: 'page',
  components: {
    HeaderBox,
    LiCor,
    About,
    Philosophy,
    LetterFromC3U
  },
  data() {
    return {
      banner01: require('@/assets/images/banner.jpg'),
      list: [
        { title: "2023全国春播地图出炉 一图看春播的进度条到哪了" },
        { title: "春为岁首，农为先行。进入雨水节气，草木萌动，万物复苏，一年一度的春耕春播正由南到北在祖国大地上展开。" },
        { title: "全国春播地图 看大江南北春播差异有多大" },
        { title: "春播一粒粟，秋收万颗子。春播是全年农业生产的第一战，春播粮食面积占全年的一半以上，对全年粮食生产供给起着决定性作用。" },
        { title: "根据中国天气网发布的2023全国春播地图可以看出，今年我国春播在2月下旬陆续开始，由南至北持续至5月上中旬。" },
        { title: "华南是我国春播开始最早的地区，海南岛、台湾岛两大宝岛" },
        { title: "3月下旬到4月上旬，江南、江淮、江汉一带的农田逐渐热闹起来" },
        { title: "月的西北地区虽然还是春寒料峭，但土豆、春小麦的播种已经率先开始了" },
        { title: "4月中下旬，春天大踏步北上" },
        { title: "春播看天时 今春气象条件总体利于春耕春播" },
      ],
      list1: [
        { title: "华南是我国春播开始最早的地区，海南岛、台湾岛两大宝岛" },
        { title: "3月下旬到4月上旬，江南、江淮、江汉一带的农田逐渐热闹起来" },
        { title: "月的西北地区虽然还是春寒料峭，但土豆、春小麦的播种已经率先开始了" },
        { title: "4月中下旬，春天大踏步北上" },
        { title: "春播看天时 今春气象条件总体利于春耕春播" },
        { title: "2023全国春播地图出炉 一图看春播的进度条到哪了" },
        { title: "春为岁首，农为先行。进入雨水节气，草木萌动，万物复苏，一年一度的春耕春播正由南到北在祖国大地上展开。" },
        { title: "全国春播地图 看大江南北春播差异有多大" },
        { title: "春播一粒粟，秋收万颗子。春播是全年农业生产的第一战，春播粮食面积占全年的一半以上，对全年粮食生产供给起着决定性作用。" },
        { title: "根据中国天气网发布的2023全国春播地图可以看出，今年我国春播在2月下旬陆续开始，由南至北持续至5月上中旬。" },
      ],

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
    gotUrl(url) {
      this.$router.push(url);
    }
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

    .carousel {
      img {
        width: 100%;
        height: 100%;
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
