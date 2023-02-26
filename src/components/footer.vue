<template>
  <div class="page">
    <a-row :gutter="[16, 16]">
      <a-col :span="4">
        <div class="log_h1 b_top_border b_bottom_border">
          <div class="log_box">
            <div class="log">
              <letter-table />
            </div>
            <div class="f_S_16 l_h_32 f_f_wryh c_white f_t_c">
              I SEE you in a new web
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="20">
        <div class="log_h1 b_top_border b_bottom_border">
          <a-col :span="6">
            <a-list :grid="{ gutter: 16, column: 1 }" :data-source="data1" :bordered="false">
              <a-list-item slot="renderItem" slot-scope="item">
                <span class="c_white cursor-por" @click="gotUrl(item.url)">{{ item.title }}</span>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="6">
            <a-list :grid="{ gutter: 16, column: 1 }" :data-source="data2" :bordered="false">
              <a-list-item slot="renderItem" slot-scope="item">
                <span class="c_white">{{ item.title }}</span>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="6">
            <a-list :grid="{ gutter: 16, column: 1 }" :data-source="data3" :bordered="false">
              <a-list-item slot="renderItem" slot-scope="item">
                <span class="c_white">{{ item.title }}</span>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col :span="6">
            <img :src="ewm" class="ewm">
          </a-col>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="[16, 0]">
      <a-col :span="4">
          <div class="c_white f_S_16">我国春播开始最早的地区</div>
        </a-col>
        <a-col :span="20">
          <a-col :span="12">
            <div class="c_white f_S_16">http://www.baidu.com</div>
          </a-col>
          <a-col :span="12">
            <div class="c_white f_S_16 f_t_r">Copy @52 我的公司</div>
          </a-col>
        </a-col>
    </a-row>
  </div>
</template>

<script>
import LetterTable from './LetterAll.vue'
export default {
  name: 'page',
  components: { LetterTable },
  data() {
    return {
      data1: [
        { title: "Letter from C3U", url:"/page" },
        { title: 'Philosophry', url:"/pli" },
        { title: 'aoubt', url:"/about" },
      ],
      data2: [
        { title: '+86 177 2449 4277' },
        { title: '+65 89429214' },
        { title: 'ddsadasd@qq.com' },
      ],
      data3: [
        { title: 'Twitter' },
        { title: 'WeChat' },
        { title: 'Ccntact' },
      ],
      ewm: require('@/assets/images/code.jpg'),
    }
  },
  methods: {
    gotUrl(url){
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

  .log_h1 {
    width: 100%;
    height: 100%;
    display: inline-table;
  }

  .ewm {
    max-width: 120px;
    max-height: 120px;
  }

  .log_box {
    width: 100%;
    height: 100%;

    .log {
      width: 160px;
      height: 78px;
      margin: 16px 0px 10px calc(100% - 80%);
    }
  }
}
</style>
