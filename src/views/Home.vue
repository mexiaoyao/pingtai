<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span @click="changeLocale()">语言切换</span>
    {{$t("open")}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    changeLocale() {
        this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    },
  }
}
</script>
