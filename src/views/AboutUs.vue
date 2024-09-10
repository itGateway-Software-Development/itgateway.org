<template>
  <div>
    <AboutUsSlider></AboutUsSlider>
    <AboutSuccess></AboutSuccess>
    <Ecosystem></Ecosystem>
    <Journal></Journal>
    <AboutLastSection></AboutLastSection>
  </div>
</template>

<script>
import AboutLastSection from "../components/aboutUs/AboutLastSection";
import Journal from "../components/aboutUs/Journal";
import Ecosystem from "../components/aboutUs/Ecosystem";
import AboutSuccess from "../components/aboutUs/AboutSuccess";
import AboutUsSlider from "../components/aboutUs/AboutUsSlider";
export default {
  components: {
    AboutLastSection,
    Journal,
    Ecosystem,
    AboutSuccess,
    AboutUsSlider,
  },
};
</script>

<style></style>
