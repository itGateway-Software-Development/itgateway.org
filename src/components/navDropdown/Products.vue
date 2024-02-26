<template>
    <div class="dropdown">
        <div class="content d-flex gap-5">
            <div class="row dropdown-content-row w-100">
              <div class="col-12 col-sm-6 col-md-4 mb-3">
                <router-link to="#">
                  <div class="dropdown-content">
                    <img :src="require('@/assets/images/nav_icon/product/cloud.png')" alt="">
                    <h5 class="fw-bold text-center">itGateway Cloud</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 mb-3">
                <router-link to="#">
                  <div class="dropdown-content">
                    <img :src="require('@/assets/images/nav_icon/product/erp.png')" alt="">
                    <h5 class="fw-bold text-center">itGateway ERP</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 mb-3">
                <router-link to="#">
                  <div class="dropdown-content">
                    <img :src="require('@/assets/images/nav_icon/product/pos.png')" alt="">
                    <h5 class="fw-bold text-center">itGateway POS</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 mb-3">
                <router-link to="#">
                  <div class="dropdown-content">
                    <img :src="require('@/assets/images/nav_icon/product/lms.png')" alt="">
                    <h5 class="fw-bold text-center">itGateway LMS</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 mb-3">
                <router-link to="#">
                  <div class="dropdown-content">
                    <img :src="require('@/assets/images/nav_icon/product/integration.png')" alt="">
                    <h5 class="fw-bold text-center">Software Integration</h5>
                  </div>
                </router-link>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  .dropdown-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 10px;
    border-radius: 10px;
    transition: .3s ease;
  }

  .dropdown-content:hover {
    transform: translateY(-5px);
  }

  .dropdown-content:hover h5 {
    color: var(--main-color);
  }

  .dropdown-content img {
    width: 100px;
  }

  @media (max-width: 1500px) {
    .dropdown-content img {
      width: 80px;
    }
  }

  @media (max-width: 1200px) {
    .dropdown-content{
      padding: 0px 10px 20px;
    }

    .dropdown-content img {
      width: 60px;
    }
    .dropdown-content h5 {
      font-size: 16px;
    }
  }
</style>


