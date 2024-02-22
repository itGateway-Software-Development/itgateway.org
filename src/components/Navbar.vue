<template>
  <div class="nav-wrapper">
    <nav class="pb-1">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo">
        <img :src="require('@/assets/images/logo.png')" alt="">
      </div>

      <!-- mobile menu button  -->
      <div class="mobile-menu-btn" @click="drawer = !drawer">
        <span class="material-symbols-outlined fs-1">
          menu_open
        </span>
      </div>

      <div class="top-menu ">
        <span  class=" search-input-wrapper d-inline-flex" :class="{searching: isSearch}">
            <input type="text" class="search-input" placeholder="search ....." :class="{'searching' : isSearch}">
            <span class="material-symbols-outlined icon cursor-pointer search-bar-icon prevent-select" :class="{'searching' : isSearch}" ref="searchIcon"  @click="isSearch = !isSearch">
              search
            </span>
        </span>
        <router-link to="" class="menu">{{ $t("contact") }}</router-link>
        <router-link to="" class="menu">{{ $t("about") }}</router-link>
        <router-link to="" class="menu d-flex align-items-center position-relative language-wrapper">
          <span v-if="language == 'EN'" class="span-menu">English</span>
          <span v-else class="span-menu">မြန်မာ</span>
          <i class="mdi mdi-menu-down"></i>
          <div class="language">
            <button @click="changeLanguage('EN')">English</button>
            <button @click="changeLanguage('MM')">Myanmar</button>
          </div>
        </router-link>
        <div class="btn-wrapper">
          <a href="#" class="menu btn btn-sm menu-btn primary-btn">{{ $t('customer_portal') }}</a>
        </div>
        
        <!-- dark icon  -->
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon theme-icon" @click="changeTheme('dark')" :class="{'d-none': currentTheme == 'dark'}" >
          light_mode
          <span class="light-icon-info menu-icon-info">change to dark</span>
        </span>
        <span class="menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon theme-icon" @click="changeTheme('light')" :class="{'d-none': currentTheme == 'light'}" >
          dark_mode
          <span class="dark-icon-info menu-icon-info">change to light</span>
        </span>
      </div>
    </div>
    </nav>

    <!-- mobile menu  -->
    <v-navigation-drawer app v-model="drawer" id="drawer" temporary>
      <v-list>
        <v-list-item @click="navigate('/')" class="head-menu">
          <v-list-item-title style="font-size: 14px; color: #50c4ff">
            <span>itGateway</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="navigate('/')">
          <v-list-item-title class="main-title">
            <v-icon icon="mdi-home"></v-icon> Home</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <nav class=" main-nav pt-0 position-relative" :class="{active: isScroll}">
      <router-link to="#" class="menu service-group" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        {{ $t('service-group') }}
        <ServiceGroup />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        {{ $t('solutions') }}
        <Solutions :dropdownContent=dropdownContent />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        {{ $t('products') }}
        <Products />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">
        {{ $t('blogs') }}
        <Blogs />
      </router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">{{ $t('partners') }}</router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">{{ $t('event') }}</router-link>
      <router-link to="#" class="menu" @mouseenter="menuHover(true)" @mouseleave="menuHover(false)">{{ $t('careers') }}</router-link>
    </nav>
  </div>
</template>

<script>
import "@/assets/css/nav.css";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Solutions from '@/components/navDropdown/Solutions';
import ServiceGroup from '@/components/navDropdown/ServiceGroup';
import Products from '@/components/navDropdown/Products';
import Blogs from '@/components/navDropdown/Blogs';
import { useStore } from "vuex";

export default {
  components: {Solutions, ServiceGroup, Products, Blogs},
  setup(props, {emit}) {
    const currentTheme = ref('dark');
    const isSearch = ref(false);
    const drawer = ref(false);
    const router = useRouter();
    const dropdownContent = ref('cloud');
    const store = useStore();
    const language = ref('EN');
    const isScroll = ref(false);

    const navigate = (route) => {
      router.push(route);
      drawer.value = false;
    }
    const changeTheme = (theme) => { currentTheme.value = theme };
    const menuHover = (value) => emit("menuHoverStatus", value);

    const changeLanguage = (lang) => {
      language.value = lang;
      store.dispatch('getLocale', lang);
    }

    const handleNavShadow = () => {
      if(window.scrollY > 300) {
        isScroll.value = true;
      } else {
        isScroll.value = false;
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleNavShadow);
    })

      return { currentTheme,changeTheme, isSearch, drawer, navigate, dropdownContent, changeLanguage, language, menuHover, isScroll}
  }
};
</script>

<style >
</style>
