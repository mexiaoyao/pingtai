<template>
  <div class="starBody">
      <!-- <div class="star" ref="starsRef"></div> -->
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
    //this.createStar();
    this.createmetreor();
  },
  methods: {
    //创建星星
    createStar(){
      let starsRef = this.$refs.starsRef;
      let shadow = ""
      for (let i = 0; i < this.starts; i++) {
        let x = Math.floor(Math.random() * this.starWidth);
        let y = Math.floor(Math.random() * this.starHeight);
        shadow = `${x}px ${y}px #fff, ${shadow}`
      }
      shadow = shadow.substring(0, shadow.length - 2)
      starsRef.style.boxShadow = shadow
    },
    createmetreor(){
      let metreorRef = this.$refs.metreorRef;
      metreorRef.forEach((item) => {
        let v = Math.floor(Math.random() * 100);
        let h = Math.floor(Math.random() * 100);
        let time = Math.floor(Math.random() * 800 + 2); //速度 值越大越慢
        item.style.left = `${v}%`;
        item.style.top = `${h}px`;
        item.style.animation = `meteorAnim ${time}s linear  infinite`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  100% {
    opacity: 0;
  }
}
.starBody{
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
  .star {
    width: 2px;
    height: 2x;
    background: transparent;
  }
  .meteor{
    position: absolute;
    width: 3px;
    height: 3px;
    top: 10px;
    left:30px;
  }
  .meteor::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(#fff,1);
  }
}
</style>
