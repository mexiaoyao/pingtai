<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span @click="changeLocale()">语言切换</span>
    {{$t("open")}}--{{$t("close")}}
    <MoreStar/>
  </div>
</template>

<script>
// @ is an alias to /src
import MoreStar from '@/components/moreStar.vue'

export default {
  name: 'home',
  components: {
    MoreStar
  },
  methods: {
    changeLocale() {
        this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    },
  }
}
</script>
