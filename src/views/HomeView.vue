<template>
  <v-app>
    <Carousel></Carousel>
    <ServiceGroup :theme="theme"></ServiceGroup>
    <SuccessStory></SuccessStory>
    <WhyitGateway></WhyitGateway>
    <Customers></Customers>
    <Partners></Partners>
    <OurExpertSlide></OurExpertSlide>
    <VisionMission></VisionMission>
  </v-app>
</template>

<script>
import OurExpertSlide from "../components/OurExpertSlide";
import VisionMission from "../components/VisionMission";
import Partners from "../components/Partners";
import Customers from "../components/Customers";
import WhyitGateway from "../components/WhyitGateway";
import SuccessStory from "../components/SuccessStory";
import ServiceGroup from "../components/ServiceGroup";
import Carousel from "../components/Carousel";
// Components
export default {
  components: {
    OurExpertSlide,
    VisionMission,
    Partners,
    Customers,
    WhyitGateway,
    SuccessStory,
    ServiceGroup,
    Carousel,
  },
  props: ["theme"],
};
</script>
