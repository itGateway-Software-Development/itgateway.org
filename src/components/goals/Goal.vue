<template>
    <div class="goal-img position-relative">
        <img class="w-100 h-100 object-fit-cover" :src="require('@/assets/images/goals/goals.jpeg')" alt="">
        <div class="header position-absolute d-flex align-items-center gap-3">
            <img class="goal_icon" :src="require('@/assets/images/goals/goal_icon.png')" alt="">
            <h3>Goals</h3>
        </div>
        <div class="goal-content">
            <router-link to="#" class="d-flex gap-2"> 
                itGateway Cloud
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Software Development 
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Premium IT Solutions 
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Engineering Solutions 
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Managed Services
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Cyber Security Solutions
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Cloud Application 
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
            <router-link to="#" class="d-flex gap-2"> 
                Trainings 
                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .vision-mission .goal-img .header {
        top: 10%;
        left: 30%;
    }
    .vision-mission .goal-img .header img {
        width: 80px;
    }

    .vision-mission .goal-img .header h3 {
        font-size: 3rem;
        font-weight: bold;
    }

    .vision-mission .goal-content {
        position: absolute;
        top: 40%;
        left: 30%;
    }

    .vision-mission .goal-content a {
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        transition: .5s ease;
        color: #ededed !important;
    }

    .vision-mission .goal-content span {
        font-weight: bold;
    }

    .vision-mission .goal-content a:hover {
        transform: translateX(10px);
        color: #EC6316 !important;
    }   
</style>
