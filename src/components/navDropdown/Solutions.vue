<template>
<div class="dropdown">
        <div class="content d-flex gap-5">
            <ul class="pt-5 pe-5  multi">
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
              <li @mouseover="dropdownContent = 'enterprise'" :class="{ active: dropdownContent == 'enterprise'}">
                Enterprise
              </li>
              <li
                @mouseover="dropdownContent = 'finacial'"
                :class="{ active: dropdownContent == 'finacial' }"
              >
                Finacial Services
              </li>
              <li
                @mouseover="dropdownContent = 'manufacturing'"
                :class="{ active: dropdownContent == 'manufacturing' }"
              >
                Manufacturing
              </li>
              <li
                @mouseover="dropdownContent = 'retail_chain'"
                :class="{ active: dropdownContent == 'retail_chain' }"
              >
                Retail Chain
              </li>
              <li
                @mouseover="dropdownContent = 'healthcare'"
                :class="{ active: dropdownContent == 'healthcare' }"
              >
                Healthcare
              </li>
              <li
                @mouseover="dropdownContent = 'food&beverage'"
                :class="{ active: dropdownContent == 'food&beverage' }"
              >
                Food & Beverage
              </li>
              <li
                @mouseover="dropdownContent = 'industrial'"
                :class="{ active: dropdownContent == 'industrial' }"
              >
                Industrial
              </li>
              <li
                @mouseover="dropdownContent = 'small&medium'"
                :class="{ active: dropdownContent == 'small&medium' }"
              >
                Small & Medium Business
              </li>
            </ul>
            <div class="solution pt-5">
              <div v-if="dropdownContent == 'enterprise'">
                <Enterprise />
              </div>

              <div v-if="dropdownContent == 'finacial'">
                <Finacial />
              </div>

              <div v-if="dropdownContent == 'manufacturing'">
                <Manufacturing />
              </div>

              <div v-if="dropdownContent == 'retail_chain'">
                <RetailChain />
              </div>

              <div v-if="dropdownContent == 'healthcare'">
                <HealthCare />
              </div>

              <div v-if="dropdownContent == 'food&beverage'">
                <FoodBeverage />
              </div>
            </div>
        </div>
      </div>
</template>

<script>
import FoodBeverage from './solution/FoodBeverage'
import HealthCare from './solution/HealthCare'
import RetailChain from './solution/RetailChain'
import Manufacturing from './solution/Manufacturing'
import Finacial from './solution/Finacial'
import Enterprise from './solution/Enterprise'
export default {
  components: {
    FoodBeverage,
    HealthCare,
    RetailChain,
    Manufacturing,
    Finacial, Enterprise },
  props: ['dropdownContent'],

  }
</script>

<style>
    .solution-container {
        position: relative;
    }
    .solution-container .readmore {
        position: absolute;
        bottom: -10px;
        overflow: hidden;
    }

    .solution-container a {
        transform: translateX(-127px);
        transition: .5s ease;
        transition: .5s;
    }

    .solution-container:hover .readmore a {
        transform: translateX(0);
        border-bottom: 1px solid #EC6316;
    }

    .solution-container:hover .readmore a:hover {
      color: #EC6316 !important;
    }
</style>