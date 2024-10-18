<template>
  <div class="solution-container">
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> chromecast_device </span
          >IoT
        </h5>
        <router-link to="#" class="hilight-font"
          >Empowers businesses with real-time data collection, intelligent
          automatuon, driving efficiency, innovation through connected devices
          and smart solutions​​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <div class="menu-route">
          <a href="#" @click="redirectUrl('https://www.itgatewaycloud.com/')">
            <h5 class="d-flex">
              <span class="material-symbols-outlined me-3"> cloud </span>Cloud
              Computing
            </h5>
          </a>

          <a
            href="#"
            @click="redirectUrl('https://www.itgatewaycloud.com/')"
            class="hilight-font"
            ><span
              >Delivers scalable, real-time solutions for ERP, POS, inventory
              management, customer engagement, and stramlined operations across
              all locations.​</span
            >​</a
          >
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> vertical_split</span
          >Managed Services
        </h5>
        <router-link to="#" class="hilight-font"
          >With our Managed Services, offering procative monitoring, expert
          management, and seamless support to ensure your systems run smoothly
          and efficiently ​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> api </span>
          ERP​
        </h5>
        <router-link to="#" class="hilight-font"
          >Streamline your operations with our robust ERP development services,
          integrating all your business processes into a unified
          system.​​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> analytics </span>POS
          System
        </h5>
        <router-link to="#" class="hilight-font"
          >Managing transactions, customer orders, payment processing in
          resturants, cafes, and retail outlets. Integration with inventroy
          management systems.​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> apps </span>Mobile
          Application
        </h5>
        <router-link to="#" class="hilight-font"
          >Mobile apps development for customer orders, loyalty programs,
          internal staff management, food tracking, and supply chain
          monitoring.​</router-link
        >
      </div>
    </div>
    <div class="readmore">
      <router-link to="#" class="d-flex align-items-center gap-2">
        <span>Read More Solution</span>
        <span class="material-symbols-outlined mt-1 ms-1" style="color: #ec6316"
          >arrow_right_alt</span
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const redirectUrl = (url) => {
      window.open(url);
    };

    return { redirectUrl };
  },
};
</script>

<style scoped>
.menu-route h5,
.menu-route span {
  transition: 0.3s ease;
}

.menu-route:hover h5,
.menu-route:hover span {
  color: #ec6316;
}
</style>
