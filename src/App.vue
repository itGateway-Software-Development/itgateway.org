<template>
  <v-app>
    <Navbar @menuHoverStatus="menuHoverEffect" @themeChange="handleTheme"/>
    <v-main :class="{blurPage : isHover}">
      <Loading v-if="loading" />
      <router-view :theme="theme" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import Navbar from "@/components/Navbar.vue";
import Loading from "./components/Loading.vue";
import { onMounted, ref } from 'vue';
export default {
  components: {
    Footer, Navbar, Loading },
  setup() {
    const loading = ref(true);
    const isHover = ref(false);
    const theme = ref('light');

    const menuHoverEffect = (data) => isHover.value = data;
    const handleTheme = (data) => theme.value = data;
    
    onMounted(() => {
      loading.value = false;
    })

    return {loading, menuHoverEffect, isHover, handleTheme, theme}
  },

};
</script>

<style>
  .blurPage {
    filter: blur(5px) brightness(.5);
    background: rgb(255, 254, 254);
  }
</style>





