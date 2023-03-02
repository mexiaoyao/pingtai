/*
@auther zl
@des 文字生成 
*/
export default {
  data() {
    return {
      time: 500,
      //A
      ACss: [],
      ANumList: [
        1,2,3, 
        6,8, 
        11, 13, 
        15, 19, 
        20,21, 22, 23,24, 25, 29, 30, 34],
      setColr_A: [{ num: 2, color: "#ff0101" }],

      //B
      bCss: [],
      bNumList: [
        0,1,2,3, 
        5, 8, 
        10, 13,
        15, 16, 17, 18, 19, 
        20, 24, 
        25, 29, 
        30, 31, 32, 33, 34],
      setColr_b: [{ num: 30, color: "#00fe00" }],

      //e
      eCss: [],
      eNumList: [10, 11, 12, 13, 15, 18, 20, 21, 22, 23, 25, 30, 31, 32, 33],
      setColr_e: [{ num: 4, color: "#0001fc" }],

      //h
      hCss: [],
      hNumList: [1, 6, 11, 16, 17, 18, 21, 23, 26, 28, 31, 33],
      setColr_h: [{ num: 2, color: "#ff0101" }],

      //i
      iCss: [],
      iNumList: [2, 7, 17, 22, 27, 32],
      setColr_i: [{ num: 2, color: "#ff0101" }],

      //L
      LCss: [],
      LNumList: [0, 1, 5, 6, 10, 11, 15, 16, 20, 21, 25, 26, 31, 32, 33, 34],
      setColr_L: [{ num: 2, color: "#ff0101" }],

      //l
      lCss: [],
      lNumList: [2, 7, 12, 17, 22, 27, 32],
      setColr_l: [{ num: 2, color: "#ff0101" }],

      //P
      PCss: [],
      PNumList: [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 23, 24, 25, 30],
      setColr_P: [{ num: 2, color: "#ff0101" }],

      //p
      pCss: [],
      pNumList: [11, 12, 13, 16, 18, 21, 22, 23, 26, 31],
      setColr_p: [{ num: 2, color: "#ff0101" }],

      //o
      oCss: [],
      oNumList: [
        0, 1, 2, 3, 4, 
        5, 9, 
        10, 14, 
        15, 19, 
        20, 24, 
        25, 29, 
        30, 31, 32, 33,
      ],
      setColr_o: [{ num: 4, color: "#0001fc" }],

      //s
      sCss: [],
      sNumList: [11, 12, 13, 16, 21, 22, 23, 28, 31, 32, 33],
      setColr_s: [{ num: 2, color: "#ff0101" }],

      //U
      uCss: [],
      uNumList: [
        0, 4, 
        5, 9, 
        10, 14, 
        15, 19, 
        20, 24, 
        25, 29, 
        30, 31, 32, 33],
      setColr_u: [{ num: 30, color: "red" }],

      //T
      tCss: [],
      tNumList: [
        0, 1, 2, 3, 4,
        7, 
        12, 
        17, 
        22, 
        27,
        32
      ],
      setColr_t: [{ num: 0, color: "#00fe00" }],

      //y
      yCss: [],
      yNumList: [11, 13, 16, 18, 21, 22, 23, 28, 31, 32, 33],
      setColr_y: [{ num: 2, color: "#ff0101" }],
    };
  },
  methods: {
    creatWord(setColor, numList, css) {
      let colorList = this.setColorList(numList, setColor);
      this.createLetter(numList, colorList, css);
      this.createMake(numList, colorList, css);
    },

    createMake(numList, colorList, css) {
      setTimeout(() => {
        css.splice(0, css.length);
        this.createLetter(numList, colorList, css);
        colorList.unshift(colorList.pop());
        this.createMake(numList, colorList, css);
      }, this.time);
    },
    createLetter(letter, color, letterCss) {
      let index = 0;
      for (let i = 0; i < 35; i++) {
        if (letter.includes(i) && color[index]) {
          letterCss.push(color[index]);
          index++;
        } else {
          letterCss.push("none");
        }
      }
    },
    /**
     * "#ff0101", //红色
     * "#0001fc", //蓝色
     * "#707070", //灰色
     * "#00fe00", //银光绿
     * **/
    setColorList(numList, multiColourList) {
      let colorList = [];
      let len = numList.length;
      let size = multiColourList.length;
      for (let i = 0; i < len; i++) {
        let color = "#ffffff";
        for (let j = 0; j < size; j++) {
          if (numList[i] == multiColourList[j].num) {
            color = multiColourList[j].color;
            break;
          }
        }
        colorList.push(color);
      }
      return colorList;
    },
  },
};
