<template>
  <div class="home">
    <MoreStar/>
    <LetterTable/>
  </div>
</template>

<script>
import MoreStar from '@/components/moreStar.vue'
import LetterTable from '@/components/LetterTable.vue'

export default {
  name: 'home',
  components: {
    MoreStar,
    LetterTable
  },
  methods: {
    changeLocale() {
        this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    },
  }
}
</script>
<style scoped lang="less">
.home{
  width:100%;
  height:100%;
}
</style>
