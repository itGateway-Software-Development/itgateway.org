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
          Cloud Service
        </li>
        <li
          @mouseover="dropdownContent = 'software'"
          :class="{ active: dropdownContent == 'software' }"
        >
          Software
        </li>
        <li
          @mouseover="dropdownContent = 'server&storage'"
          :class="{ active: dropdownContent == 'server&storage' }"
        >
          Server & Storage
        </li>
        <li
          @mouseover="dropdownContent = 'networking'"
          :class="{ active: dropdownContent == 'networking' }"
        >
          Networking
        </li>
        <li
          @mouseover="dropdownContent = 'security'"
          :class="{ active: dropdownContent == 'security' }"
        >
          Security
        </li>
        <li
          @mouseover="dropdownContent = 'surveillance'"
          :class="{ active: dropdownContent == 'surveillance' }"
        >
          Video Surveillance
        </li>
        <li
          @mouseover="dropdownContent = 'laptop&desktop'"
          :class="{ active: dropdownContent == 'laptop&desktop' }"
        >
          Laptop & Desktop
        </li>
        <li
          @mouseover="dropdownContent = 'licensing'"
          :class="{ active: dropdownContent == 'licensing' }"
        >
          Licensing
        </li>
      </ul>

      <div class="solution pt-5">
        <div v-if="dropdownContent == 'cloud_service'">
          <CloudService />
        </div>

        <div v-if="dropdownContent == 'software'">
          <Software />
        </div>

        <div v-if="dropdownContent == 'server&storage'">
          <ServerStorage />
        </div>

        <div v-if="dropdownContent == 'networking'">
          <Networking />
        </div>

        <div v-if="dropdownContent == 'security'">
          <Security />
        </div>

        <div v-if="dropdownContent == 'surveillance'">
          <Surveillance />
        </div>

        <div v-if="dropdownContent == 'laptop&desktop'">
          <LaptopDesktop />
        </div>

        <div v-if="dropdownContent == 'licensing'">
          <Licensing />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Licensing from "./products/Licensing";
import LaptopDesktop from "./products/LaptopDesktop";
import Surveillance from "./products/Surveillance";
import Security from "./products/Security";
import Networking from "./products/Networking";
import ServerStorage from "./products/ServerStorage";
import Software from "./products/Software";
import CloudService from "./products/CloudService";
import { ref, onMounted } from "vue";
export default {
  components: {
    Licensing,
    LaptopDesktop,
    Surveillance,
    Security,
    Networking,
    ServerStorage,
    Software,
    CloudService,
  },
  props: ["dropdownContent"],

  setup(props) {
    onMounted(() => {
      console.log(props.value);
    });
  },
};
</script>

<style>
.product-container {
  position: relative;
}
.product-container .readmore {
  position: absolute;
  bottom: -10px;
  overflow: hidden;
}

.product-container a {
  transform: translateX(-127px);
  transition: 0.5s ease;
  transition: 0.5s;
}

.product-container:hover .readmore a {
  transform: translateX(0);
  border-bottom: 1px solid #ec6316;
}

.product-container:hover .readmore a:hover {
  color: #ec6316 !important;
}
</style>
