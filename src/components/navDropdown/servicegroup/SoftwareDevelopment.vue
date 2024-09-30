<template>
  <div class="service-group-container">
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> dashboard </span>
          Web Development​​
        </h5>
        <router-link to="#" class="hilight-font"
          >Discover our expert web development services, delivering custom,
          responsive, and user-friendly websites tailored to meet your business
          needs and enhance your online presence.​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> co_present </span
          >Managed Web Services​​​
        </h5>
        <router-link to="#" class="hilight-font"
          >Experience hassle-free your website with our comprehensive Managed
          Web Services, ensuring your site is secure, updated, and running
          smoothly, allowing to focus on your business growth.​​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <div class="menu-route">
          <a
            href="#"
            @click="
              redirectUrl(
                'https://www.itgatewaycloud.com/products/web/webhosting'
              )
            "
          >
            <h5 class="d-flex">
              <span class="material-symbols-outlined me-3"> data_table </span
              >Cloud Hosting​​​
            </h5>
          </a>

          <a
            href="#"
            @click="
              redirectUrl(
                'https://www.itgatewaycloud.com/products/web/webhosting'
              )
            "
            class="hilight-font"
            ><span
              >Unlock reliable and high-performance web hosting solutions,
              domain & ssl certificate tailored to your needs, ensuring fast
              load times, maximum uptime, and exceptional support for your
              online presence.​</span
            >​</a
          >
        </div>
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
