<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span @click="changeLocale()">语言切换</span>
    {{$t("open")}}
      <div style="width: 100px; height: 120px;"><LetterTable :backColorList="cCss"/></div>
    
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
        "#707070", //红色10
        "#707070", //灰色11
        "#707070", //灰色16
        "#707070", //灰色21
        "#ff0101", //灰色26
        "#707070", //灰色30
        "#707070", //灰色32
        "#707070", //灰色33
        "#0001fc", //蓝色34
      ],

    }
  },
  created() {
    this.createC()
  },
  methods: {
    createC() {
      this.cCss = [];
      this.createLetter(this.cNumList, this.cColorList, this.cCss);
      this.createCmake(this.cNumList, this.cColorList, this.cCss);
    },
    createCmake(cNumList, cColorList, cCss){
      cCss = [];
      setTimeout(()=>{
        this.createLetter(cNumList, cColorList, cCss);
        cColorList.unshift(cColorList.pop());
        this.createCmake(cNumList, cColorList);
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
