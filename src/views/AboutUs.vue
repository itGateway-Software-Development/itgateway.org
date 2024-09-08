<template>
  <div>
    <AboutUsSlider></AboutUsSlider>
    <AboutSuccess></AboutSuccess>
    <Ecosystem></Ecosystem>
    <Journal></Journal>
  </div>
</template>

<script>
import Journal from "../components/aboutUs/Journal";
import Ecosystem from "../components/aboutUs/Ecosystem";
import AboutSuccess from "../components/aboutUs/AboutSuccess";
import AboutUsSlider from "../components/aboutUs/AboutUsSlider";
export default {
  components: {
    Journal,
    Ecosystem,
    AboutSuccess,
    AboutUsSlider,
  },
};
</script>

<style></style>
