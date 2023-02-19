<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span @click="changeLocale()">语言切换</span>
    {{$t("open")}}
    <div>
      <div style="width: 100px; height: 120px; float: left;"><LetterTable :backColorList="cCss"/></div>
      <div style="width: 100px; height: 120px; float: left; margin-left: 15px;"><LetterTable :backColorList="sCss"/></div>
      <div style="width: 100px; height: 120px; float: left; margin-left: 15px;"><LetterTable :backColorList="uCss"/></div>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import LetterTable from '@/components/LetterTable.vue'

export default {
  name: 'home',
  components: {
    LetterTable
  },
  data(){
    return {
      time: 500,

      cCss:[],
      cNumList: [
        2,3,4,
        6,10,
        11,
        16,
        21,
        26,30,
        32,33,34
      ],
      cColorList: [
        "#707070", //灰色2
        "#707070", //灰色3
        "#707070", //灰色4
        "#00fe00", //银光绿6
        "#707070", //灰色10
        "#707070", //灰色11
        "#707070", //灰色16
        "#707070", //灰色21
        "#ff0101", //红色26
        "#707070", //灰色30
        "#707070", //灰色32
        "#707070", //灰色33
        "#0001fc", //蓝色34
      ],

      sCss:[],
      sNumList: [
        2,3,4,5,
        9,
        13,
        17,18,19,
        25,
        26,30,
        32,33,34
      ],
      sColorList: [
        "#707070", //灰色2
        "#707070", //灰色3
        "#707070", //灰色4
        "#0001fc", //蓝色5
        "#707070", //灰色9
        "#707070", //灰色13
        "#ff0101", //红色17
        "#707070", //灰色18
        "#707070", //灰色19
        "#707070", //灰色25
        "#00fe00", //银光绿26
        "#707070", //灰色30
        "#707070", //灰色32
        "#707070", //灰色33
        "#707070", //灰色34
      ],

      uCss:[],
      uNumList: [
        1,5,
        6,10,
        11,15,
        16,20,
        21,25,
        26,30,
        32,33,34
      ],
      uColorList: [
        "#707070", //灰色1
        "#00fe00", //银光绿5
        "#707070", //灰色6
        "#707070", //灰色10
        "#707070", //灰色11
        "#707070", //灰色15
        "#707070", //灰色16
        "#707070", //灰色20
        "#707070", //灰色21
        "#707070", //灰色25
        "#707070", //灰色26
        "#707070", //灰色30
        "#ff0101", //红色32
        "#707070", //灰色33
        "#707070", //灰色34
      ],

    }
  },
  created() {
    this.createC()
  },
  methods: {
    createC() {
      this.cCss = [];
      this.sCss = [];
      this.uCss = [];

      this.createLetter(this.cNumList, this.cColorList, this.cCss);
      this.createMake(this.cNumList, this.cColorList, this.cCss);

      this.createLetter(this.sNumList, this.sColorList, this.sCss);
      this.createMake(this.sNumList, this.sColorList, this.sCss);

      this.createLetter(this.uNumList, this.uColorList, this.uCss);
      this.createMake(this.uNumList, this.uColorList, this.uCss);
    },

    createMake(numList, colorList, css){
      setTimeout(()=>{
        css.splice(0, css.length);
        this.createLetter(numList, colorList, css);
        colorList.unshift(colorList.pop());
        this.createMake(numList, colorList, css);
      }, this.time);
    },
    createLetter(letter, color, letterCss){
      let index = 0;
      for(let i=0; i<35; i++){
        if(letter.includes(i)){
          letterCss.push(color[index]);
          index++;
        }else{
          letterCss.push("none");
        }
      }
    },
    
    changeLocale() {
        this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
        this.setLocale(this.$i18n.locale);
    },
    setLocale(state, locale){
      state.locale = locale;
    },
  }
}
</script>
