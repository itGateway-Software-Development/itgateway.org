<template>
    <div class="whyitgateway"  >
        <div class="bg-color"></div>
        <div class="content">
            <h2 class="mb-5">Why <br> itGateway ?</h2>
            
            <div class="collapse-item cursor-pointer">
                <p class="prevent-pointer">
                    We guarantee to fulfill clients’ satisfaction by offering unique & cost-effective services, best-in-class products, 24/7 365 support and customized solutions.
                </p>
                <div class="collapsable mb-1 prevent-pointer" id="contentCollapse1" >
                    <a href="" class="d-flex align-items-center prevent-pointer"> View Managed Services 
                        <span class="material-symbols-outlined prevent-pointer">arrow_right_alt</span>
                    </a>
                </div>
            </div>

            <div class="collapse-item cursor-pointer">
                <p class="prevent-pointer">
                    We build trust with 50+ enterprise and SMB clients, and we have completed more than a 100 projects, contracts and successfully till now.
                </p>
                <div class="collapsable mb-1 prevent-pointer" id="contentCollapse2" >
                    <a href="" class="d-flex align-items-center prevent-pointer"> View Software Development 
                        <span class="material-symbols-outlined prevent-pointer">arrow_right_alt</span>
                    </a>
                </div>
            </div>

            <div class="collapse-item cursor-pointer">
                <p class="prevent-pointer">
                    We deliver outstanding support with our customer oriented and service-minded approach based on their needs.
                </p>
                <div class="collapsable mb-1 prevent-pointer" id="contentCollapse3" >
                    <a href="" class="d-flex align-items-center prevent-pointer"> View Managed Cloud Services  
                        <span class="material-symbols-outlined prevent-pointer">arrow_right_alt</span>
                    </a>
                </div>
            </div>
            <div class="collapse-item border-none d-flex justify-content-end">
                <a href="" class="d-flex align-items-center"> View Managed Cloud Services  
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    setup() {
            const bg_img = require('@/assets/images/whyitGateway/itgateway.png');

            // const showCollapse = (el) => {
            //     const collapseElement = new bootstrap.Collapse(document.getElementById(`${el}`));
            //     collapseElement.show();
            // }

            // const hideCollapse = (el) => {
            //     const collapseElement = new bootstrap.Collapse(document.getElementById(`${el}`));
            //     collapseElement.hide();
            // }
            return {bg_img}
        }
    }
</script>

<style scoped>
.whyitgateway {
    margin-top: 60px;
    margin-bottom: 100px;
    height: 700px;
    background-image: url('@/assets/images/whyitGateway/itgateway.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}

.whyitgateway .bg-color {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #a22e75c5, #ec6416a8);
    z-index: 0 !important;
}

.whyitgateway .content{
    position: absolute;
    z-index: 99 !important;
    top: 15%;
    left: 10%;
}

.whyitgateway h2 {
    font-family: 'Chakra Petch', sans-serif;
}

.whyitgateway .content .collapse-item {
    border-bottom: 2px solid #fff;
    position: relative;
    overflow: hidden;
    width: 60%;
    transition:.5s ease;
    margin-top: 30px;
}

.whyitgateway .content .collapsable {
    height: 0;
    transition: .5s ease !important;
}

.whyitgateway .content .collapse-item:hover .collapsable {
    height: 30px;
}

</style>
