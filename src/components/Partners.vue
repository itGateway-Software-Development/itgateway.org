<template>
    <div class="partners content-wrapper">
        <h2 class="text-center">itGateway Partners</h2>
        <div class="tabs d-flex justify-content-center align-items-center gap-5">
            <span :class="{active: currentTab == 'vendor'}" @click="currentTab = 'vendor'">Vendors</span>
            <span :class="{active: currentTab == 'product-partner'}" @click="currentTab = 'product-partner'">Product Partners</span>
            <span :class="{active: currentTab == 'solution-partner'}" @click="currentTab = 'solution-partner'">Solution Partners</span>
        </div>

        <!-- if vendor partners -->
        <Vendor :currentTab="currentTab"/>
        <!-- if product partenrs  -->
        <Product :currentTab="currentTab" />
    </div>
</template>

<script>
import Product from './partners/Product'
import Vendor from './partners/Vendor'
import { ref } from 'vue'
    export default {
  components: {
    Product, Vendor },
    setup() {
            const currentTab = ref('vendor');


            return {currentTab}
        }
    }
</script>

<style scoped>
    .partners {
        margin-top: 100px;
        margin-bottom: 1000px;
    }

    .partners h2 {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 2.5rem;
    }

    .partners .tabs {
        margin-top: 35px;
        margin-bottom: 80px;
    }

    .partners .tabs span {
        font-size: 1.5rem;
        cursor: pointer;
        position: relative;
    }

    .partners .tabs span.active {
        color: var(--main-color);
        font-weight: bold;
    }

    .partners .tabs span.active::before {
        content: '';
        position: absolute;
        bottom: -15px;
        left: -10%;
        width: 120%;
        height: 5px;
        background: var(--main-color);
    }   

    

   
</style>
