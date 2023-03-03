/*
@auther zl
@des 文字生成 
*/
export default {
  data() {
    return {
      time: 500,
      //A
      aCss: [],
      aNumList: [
        1, 2, 3, 6, 8, 11, 13, 15, 19, 20, 21, 22, 23, 24, 25, 29, 30, 34,
      ],
      setColr_a: [{ num: 2, color: "#ff0101" }],

      //B
      bCss: [],
      bNumList: [
        0, 1, 2, 3, 5, 8, 10, 13, 15, 16, 17, 18, 19, 20, 24, 25, 29, 30, 31,
        32, 33, 34,
      ],
      setColr_b: [{ num: 30, color: "#00fe00" }],

      cCss: [],
      cNumList: [1, 2, 3, 5, 9, 10, 15, 20, 25, 29, 31, 32, 33],
      setColr_c: [
        { num: 5, color: "#00fe00" },
        { num: 9, color: "#ff0101" },
        { num: 33, color: "#0001fc" },
      ],

      //E
      eCss: [],
      eNumList: [
        0, 1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 19, 20, 25, 30, 31, 32, 33, 34,
      ],
      setColr_e: [{ num: 4, color: "#0001fc" }],

      //F
      fCss: [],
      fNumList: [0, 1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 19, 20, 25, 30],
      setColr_f: [{ num: 4, color: "#0001fc" }],

      //H
      hCss: [],
      hNumList: [
        0, 4, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20, 24, 25, 29, 30, 34,
      ],
      setColr_h: [{ num: 30, color: "#00fe00" }],

      //I
      iCss: [],
      iNumList: [2, 7, 12, 17, 22, 27, 32],
      setColr_i: [{ num: 0, color: "#0001fc" }],

      //L
      lCss: [],
      lNumList: [0, 5, 10, 15, 20, 25, 30, 31, 32, 33, 34],
      setColr_l: [{ num: 0, color: "#0001fc" }],

      //M
      mCss: [],
      mNumList: [
        0, 4, 5, 9, 10, 11, 13, 14, 15, 17, 19, 20, 22, 24, 25, 29, 30, 34,
      ],
      setColr_m: [{ num: 34, color: "#ff0101" }],

      //P
      pCss: [],
      pNumList: [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20, 25, 30],
      setColr_p: [{ num: 0, color: "#ff0101" }],

      //O
      oCss: [],
      oNumList: [
        0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 30, 31, 32, 33,
      ],
      setColr_o: [{ num: 30, color: "#ff0101" }],

      //R
      rCss: [],
      rNumList: [
        0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 17, 20, 23, 25, 29, 30, 34,
      ],
      setColr_r: [{ num: 0, color: "#00fe00" }],

      //3
      s3Css: [],
      s3NumList: [1, 2, 3, 4, 8, 12, 16, 17, 18, 24, 25, 29, 31, 32, 33],
      setColr_s3: [
        { num: 5, color: "#0001fc" },
        { num: 17, color: "#ff0101" },
        { num: 26, color: "#00fe00" },
      ],

      //S
      sCss: [],
      sNumList: [
        0, 1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 19, 24, 29, 30, 31, 32, 33, 34,
      ],
      setColr_s: [{ num: 0, color: "#00fe00" }],

      //U
      uCss: [],
      uNumList: [0, 4, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 31, 32, 33],
      setColr_u: [
        { num: 1, color: "#00fe00" },
        { num: 32, color: "#ff0101" },
      ],

      //T
      tCss: [],
      tNumList: [0, 1, 2, 3, 4, 7, 12, 17, 22, 27, 32],
      setColr_t: [{ num: 0, color: "#00fe00" }],

      //Y
      yCss: [],
      yNumList: [0, 4, 6, 8, 11, 13, 16, 17, 18, 22, 27, 32],
      setColr_y: [{ num: 32, color: "#ff0101" }],
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
