<template>
  <div class="service-group-container">
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> cloud </span>itGateway
          Cloud
        </h5>
        <router-link to="#" class="hilight-font"
          >Build and deploy your resources on itGateway Cloud and access them
          from anywhere. Now, multiple regions are available in Singapore,
          Thailand, Netherland & Myanmar.​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> cloud_sync </span
          >Elastic Managed Cloud Services
        </h5>
        <a
          href="/"
          @click="
            redirectUrl(
              'https://www.itgatewaycloud.com/explore/manage-cloud-services'
            )
          "
          class="hilight-font"
          >Managed and support your cloud resources running on itGateway Cloud,
          AWS, Microsoft Azure, Google Cloud Platform & other CSP. ​​</a
        >
      </div>
    </div>
    <!-- <a href="https://www.google.com">Google</a> -->
    <div class="readmore">
      <a
        href="/"
        @click="redirectUrl('https://www.itgatewaycloud.com/')"
        class="d-flex align-items-center gap-2"
      >
        <span>Read More Solution</span>
        <span class="material-symbols-outlined mt-1 ms-1" style="color: #ec6316"
          >arrow_right_alt</span
        >
      </a>
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
