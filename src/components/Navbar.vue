<template>
  <nav color="dark">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo">
        <img :src="require('@/assets/images/logo.png')" alt="">
      </div>
      <div class="top-menu d-flex justify-content-between align-items-center ">
        <span class="material-symbols-outlined icon cursor-pointer menu-icon">search</span>
        <router-link to="" class="menu">Contact</router-link>
        <router-link to="" class="menu">About</router-link>
        <router-link to="" class="menu d-flex align-items-center"><span class="span-menu">Myanmar</span><i class="mdi mdi-menu-down"></i></router-link>
        <a href="#" class="menu btn btn-sm main-btn menu-btn">Customer Portal</a>
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon" :class="{'d-none': currentTheme == 'customDarkTheme'}" @click="setTheme('customDarkTheme')">
          light_mode
          <span class="light-icon-info menu-icon-info">change to dark</span>
        </span>
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon" :class="{'d-none': currentTheme == 'customLightTheme'}" @click="setTheme('customLightTheme')">
          dark_mode
          <span class="dark-icon-info menu-icon-info">change to light</span>
        </span>
      </div>
    </div>
  </nav>
  <nav class=" main-nav d-flex justify-content-start gap-3">
    <router-link to="#" class="menu">Service Groups</router-link>
    <router-link to="#" class="menu">Solutions</router-link>
    <router-link to="#" class="menu">Products</router-link>
    <router-link to="#" class="menu">Blogs</router-link>
    <router-link to="#" class="menu">Partners</router-link>
    <router-link to="#" class="menu">Event</router-link>
    <router-link to="#" class="menu">Careers</router-link>
  </nav>
</template>

<script>
import "@/assets/css/nav.css";
import { ref } from "vue";
import { useTheme } from "vuetify";
export default {
  setup() {
    const theme = useTheme();
    let currentTheme = ref(theme.global.name.value);

    const setTheme = (theme_mode) => {
      //change text color
      if(theme_mode == 'customLightTheme') {
        document.documentElement.style.setProperty('--font-color', '#3F3F3F');
      } else {
        document.documentElement.style.setProperty('--font-color', '#ededed');
      }
      theme.global.name.value = theme_mode;
      currentTheme.value = theme_mode;
      };

      return {setTheme, currentTheme}
  }
};
</script>

<style >
</style>
