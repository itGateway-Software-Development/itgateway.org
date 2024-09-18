<template>
  <div class="dropdown">
    <div class="content d-flex gap-5">
      <ul class="pt-5 pe-5 multi">
        <li class="mb-5">
          <h5 class="d-flex align-items-center">
            Overview
            <span
              class="material-symbols-outlined ms-2"
              style="font-size: 25px"
            >
              trending_flat
            </span>
          </h5>
        </li>
        <li
          @mouseover="dropdownContent = 'cloud_service'"
          :class="{ active: dropdownContent == 'cloud_service' }"
        >
          Cloud Services
        </li>
        <li
          @mouseover="dropdownContent = 'software_development'"
          :class="{ active: dropdownContent == 'software_development' }"
        >
          Software Development
        </li>
        <li
          @mouseover="dropdownContent = 'premium'"
          :class="{ active: dropdownContent == 'premium' }"
        >
          Premium IT Solutions
        </li>
        <li
          @mouseover="dropdownContent = 'engineering'"
          :class="{ active: dropdownContent == 'engineering' }"
        >
          Engineering Solution
        </li>
      </ul>

      <div class="solution pt-5">
        <div v-if="dropdownContent == 'cloud_service'">
          <CloudService />
        </div>

        <div v-if="dropdownContent == 'software_development'">
          <SoftwareDevelopment />
        </div>

        <div v-if="dropdownContent == 'premium'">
          <PremiumItSolution />
        </div>

        <div v-if="dropdownContent == 'engineering'">
          <EngineeringSolution />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EngineeringSolution from "./servicegroup/EngineeringSolution";
import PremiumItSolution from "./servicegroup/PremiumItSolution";
import SoftwareDevelopment from "./servicegroup/SoftwareDevelopment";
import CloudService from "./servicegroup/CloudService";
export default {
  components: {
    EngineeringSolution,
    PremiumItSolution,
    SoftwareDevelopment,
    CloudService,
  },
  props: ["dropdownContent"],
};
</script>

<style>
.service-group-container {
  position: relative;
}
.service-group-container .readmore {
  position: absolute;
  bottom: -10px;
  overflow: hidden;
}

.service-group-container a {
  transform: translateX(-127px);
  transition: 0.5s ease;
  transition: 0.5s;
}

.service-group-container:hover .readmore a {
  transform: translateX(0);
  border-bottom: 1px solid #ec6316;
}

.service-group-container:hover .readmore a:hover {
  color: #ec6316 !important;
}
</style>
