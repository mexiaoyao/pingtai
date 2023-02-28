/*
@auther zl
@des 文字生成
*/
export default {
  data() {
    return {
      time: 500,
    };
  },
  methods: {
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
        if (letter.includes(i)) {
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
            continue;
          }
        }
        colorList.push(color);
      }
      return colorList;
    },
  },
};
