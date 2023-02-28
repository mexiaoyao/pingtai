<template>
  <div class="star_body">
      <div class="meteor" ref="metreorRef" v-for="(item, index) in meteors" :key="index"></div>
  </div>
</template>

<script>
export default {
  name: 'star',
  props: {
    msg: String
  },
  data() {
    return {
      starts: 333, // 页面中全体星星个数
      starWidth: 1920, //黑夜边框
      starHeight: 1080, //黑夜边框
      meteors: 100,  // 流星个数

      colorList: [
        "#00fe00", //灰色
        "#ffffff", //银光绿6
        "#0001fc", //蓝色34
        "#ff0101", //红色26
        "#00fe00", //灰色
        "#ffffff", //白色
      ]
    }
  },
  computed: {

  },
  mounted() {
    this.starWidth = document.body.clientWidth;
    this.starHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.starWidth = document.body.clientWidth;
        this.starHeight = document.body.clientHeight;
      })();
    };
    this.createmetreor();
  },
  methods: {
    createmetreor(){
      let metreorRef = this.$refs.metreorRef;
      metreorRef.forEach((item) => {
        let v = Math.floor(Math.random() * 100);
        let h = Math.floor(Math.random() * 100);
        let time = Math.floor(Math.random() * 500 + 2); //速度 值越大越慢
        item.style.left = `${v}%`;
        item.style.top = `${h}px`;
        let num = Math.trunc(Math.random() * 6);
        //item.setAttribute("class","")
        item.style.backgroundColor = this.colorList[num];
        item.style.animation = `meteorAnim ${time}s linear  infinite`
      })
    }
  }
}
</script>

<style lang="less">
@keyframes meteorAnim {
  0% {
    opacity: 1;
    margin-top: 100%;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: -50%;
    opacity: 0;
  }
  50% {
    margin-top: -80%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.star_body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px auto;
  position: absolute;
  top: 0px;
  left:0px;
  .meteor{
    position: absolute;
    width: 10px;
    height: 10px;
    top: 10px;
    left:30px;
  }
}
</style>
