<template>
  <div class="solution-container">
    <div class="row mt-5">
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
          <span class="material-symbols-outlined me-3"> hub</span>SD-WAN​
        </h5>
        <router-link to="#" class="hilight-font"
          >Optimize your network performance and enhance security with SD-WAN to
          ensure seamless connectivity and superior user experiences.​
          ​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3">
            shopping_cart_checkout</span
          >E-Commerce​
        </h5>
        <router-link to="#" class="hilight-font"
          >Boost your online sales with our expert e-commerce web development
          services, creating seamless. Secure and faster shopping
          experiences.​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> analytics </span>Data
          Analytics​
        </h5>
        <router-link to="#" class="hilight-font"
          >Unlocks valuable insights from your data, empowering smarter
          decisions, enhanced peformance, optimize operations and strategic
          business growth.​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> speed_camera </span
          >Video Surveilliance
        </h5>
        <router-link to="#" class="hilight-font"
          >Enhance security and monitor your premises with our advanced video
          surveillance systems, providing real-time monitoring and reliable
          protection.​</router-link
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
