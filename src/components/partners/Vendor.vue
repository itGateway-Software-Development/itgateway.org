<template>
    <div class="vendor-content d-flex flex-wrap align-items-center" v-if="currentTab == 'vendor'">
        <div class="img" v-for="i in 21" :key="i">
            <img :src="require(`@/assets/images/vendors/${i}.png`)" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['currentTab']
    }
</script>

<style scoped>
    .vendor-content {
        gap: 40px;
    }

    .vendor-content .img {
        background: #fff;
        border-radius: 10px;
        padding: 10px;
        width: 150px;
        height: 150px;
    }

    .vendor-content img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
