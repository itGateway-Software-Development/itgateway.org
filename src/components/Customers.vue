<template>
    <div class="customers content-wrapper">
        <h2 class="text-center">Our Customers</h2>
        <p class="text-center">
            We are empowering your vision and elevating your success. Most of the customers trusted our leading technology solutions, services, supports and innovation system.
        </p>
        <div class="customer-logo d-flex flex-wrap align-items-center">
            <div class="img" v-for="i in 11" :key="i">
                <img :src="require(`@/assets/images/customers/${i}.png`)" alt="">
            </div>
            <div class="img" v-for="i in 25" :key="i">
                <img :src="require(`@/assets/images/customers/${i}.jpg`)" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .customers {
        margin-top: 60px;
    }

    .customers h2 {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 2.5rem;
    }

    .customers p {
        padding: 0px 20%;
    }

    .customer-logo {
        gap: 45px;
        margin-top: 40px;
    }

    .customer-logo .img {
        background: var(--sec-background-color);
        border-radius: 10px;
        padding: 10px;
        width: 120px;
        height: 120px;
    }

    .customer-logo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
