<template>
  <div class="page">
    <a-row :gutter="[16,16]">
      <a-col :span="4">
        <div class="logBorder">
          <div class="logBox">
            <div class="log">
              <letter-table />
            </div>
            <div class="logDes">
              I SEE you in a new web
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="20">
        <div class="logBorder">
          <a-list :grid="{ gutter: 16, column: 3 }" :data-source="data" :bordered="false">
            <a-list-item slot="renderItem" slot-scope="item">
              <span class="whileColor">{{ item.title }}</span>
            </a-list-item>
          </a-list>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import LetterTable from './LetterAll.vue'
export default {
  name: 'page',
  components: { LetterTable },
  data(){
    return {
      data:[
        {title: "Letter from C3U"},
        {title: 'Philosophry'},
        {title: 'aoubt'},
        {title: '+86 177 2449 4277'},
        {title: '+65 89429214'},
        {title: 'ddsadasd@qq.com'},
        {title: 'Twitter'},
        {title: 'WeChat'},
        {title: 'Ccntact'},
      ]
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
.page{
  width:100%;
  height:100%;
  position:relative;
  .logBorder{
    border-top: 1px solid #CCC;
    border-bottom: 1px solid #CCC;
    width:100%;
    height:100%
  }
  .whileColor{
    color:#FFF;
  }
  .logBox {
  width: 100%;
  height: 100%;

  .log {
    width: 160px;
    height: 80px;
    margin: 20px 0px 10px 20px;
  }

  .logDes {
    font: 16px/32px "微软雅黑";
    color: #FFF;
    margin-left: 15px;
  }
}
}
</style>
