<template>
  <div class="product-container">
    <div class="row mt-5">
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> computer </span>Elastic
          Virtual Machine​
        </h5>
        <router-link to="#" class="hilight-font"
          >Seamlessly integrate public and private clouds to achieve secure
          cloud infrastructure, zero downtime and prevent data
          loss.​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> dvr </span>Elastic
          Container Instance​
        </h5>
        <router-link to="#" class="hilight-font"
          >Utilize to leverage the strengths of multiple cloud service
          providers, ensuring enhanced performance, flexibility, and resilience
          for your business operations.​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> dns </span>Elastic
          Bare-Metal Server​​
        </h5>
        <router-link to="#" class="hilight-font"
          >Optimize your network performance and enhance security with SD-WAN to
          ensure seamless connectivity and superior user
          experiences.​​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> folder_copy </span
          >Elastic File Storage​
        </h5>
        <router-link to="#" class="hilight-font"
          >Provide advanced and comprehensive security solutions designed to
          protect your business from ever-evolving cyber threats or
          attack.​</router-link
        >
      </div>

      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3"> storage </span>Elastic
          Object Storage​​
        </h5>
        <router-link to="#" class="hilight-font"
          >Automate the deployment, management, and coordination of your cloud
          resources, ensuring seamless integration and efficient workflows with
          our experts.​</router-link
        >
      </div>
      <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px">
        <h5 class="d-flex">
          <span class="material-symbols-outlined me-3">
            screenshot_monitor </span
          >Elastic Web Instance​
        </h5>
        <router-link to="#" class="hilight-font"
          >Whether you need to enhance your existing datacenter or build a new
          one, our expert team is dedicated to providing solutions.
          ​</router-link
        >
      </div>
    </div>
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
