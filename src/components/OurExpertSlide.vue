<template>
  <div class="our-expert-slide">
    <h2 class="text-center section-header" data-aos="zoom-out">Our Expert</h2>
    <DesktopSlider></DesktopSlider>
    <MobileSlider></MobileSlider>
  </div>
</template>

<script>
import MobileSlider from "./expertSlider/MobileSlider";
import DesktopSlider from "./expertSlider/DesktopSlider";
export default {
  components: {
    MobileSlider,
    DesktopSlider,
  },
};
</script>

<style scoped>
.our-expert-slide {
  margin-top: 90px;
}

.our-expert-slide h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
}
</style>
