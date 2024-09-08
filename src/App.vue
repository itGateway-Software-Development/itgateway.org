<template>
  <v-app>
    <Navbar @menuHoverStatus="menuHoverEffect" @themeChange="handleTheme" />
    <v-main :class="{ blurPage: isHover }">
      <Loading v-if="loading" />
      <router-view :theme="theme" />
    </v-main>
    <Footer />
  </v-app>

  <Loading v-if="loading" />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "@/components/Navbar.vue";
import Loading from "./components/Loading.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    Footer,
    Navbar,
    Loading,
  },
  setup() {
    const loading = ref(true);
    const isHover = ref(false);
    const theme = ref("light");
    const route = useRoute();
    document.gleenConfig = {
      company: "itgateway",
    };

    const menuHoverEffect = (data) => (isHover.value = data);
    const handleTheme = (data) => (theme.value = data);

    const loadContent = () => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 1000);
    };

    watch(route, () => loadContent());

    onMounted(() => {
      window.addEventListener("load", () => {
        loading.value = false;
      });
      // const script = document.createElement("script");
      // script.src = "https://app.gleen.ai/sdk/gleenWidget.js";
      // script.async = true;
      // document.head.appendChild(script);
    });

    return { loading, menuHoverEffect, isHover, handleTheme, theme };
  },
};
</script>

<style>
.blurPage {
  filter: blur(5px) brightness(0.5);
  background: rgb(255, 254, 254);
}
</style>
