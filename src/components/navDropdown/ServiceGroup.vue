<template>
    <div class="dropdown">
        <div class="content d-flex gap-5">
            <div class="row dropdown-content-row w-100">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/cs.png')" alt="">
                    <h5 class="fw-bold text-center">Cloud Services</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/software.png')" alt="">
                    <h5 class="fw-bold text-center">Software Development</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/premium_it_solution.png')" alt="">
                    <h5 class="fw-bold text-center">Premium IT Solutions</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/engineering_solution.png')" alt="">
                    <h5 class="fw-bold text-center">Engineering Solutions</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/manage_service.png')" alt="">
                    <h5 class="fw-bold text-center">Manage Services</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/training.png')" alt="">
                    <h5 class="fw-bold text-center">IT Trainings</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/cyber_security.png')" alt="">
                    <h5 class="fw-bold text-center">Cyber Security</h5>
                  </div>
                </router-link>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <router-link to="#">
                  <div class="dropdown-content ">
                    <img :src="require('@/assets/images/nav_icon/service/application.png')" alt="">
                    <h5 class="fw-bold text-center">Application Services</h5>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- <ul class="pt-5 ps-5">
              <li>
                Cloud Services
              </li>
              <li>
                Software Development
              </li>
              <li>
                Premium IT Solutions
              </li>
              <li>
                Engineering Solutions
              </li>
              <li>
                Managed Services
              </li>
              <li>
                IT Trainings
              </li>
              <li>
                Cyber Security
              </li>
              <li>
                Application Services
              </li>
            </ul> -->
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
    border: 1px solid var(--main-color);
    transform: translateY(-5px);
  }

  .dropdown-content:hover h5 {
    color: var(--main-color);
  }

  .dropdown-content img {
    width: 100px;
  }
</style>


