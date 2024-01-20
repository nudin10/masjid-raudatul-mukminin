<template>
    <Carousel ref="childContainer" class="carousel my-8">
        <Slide>
            <div class="" ref="item">
                <img src="../../assets/images/events/default-event.jpg" alt="" class="h-1.5">
            </div>
        </Slide>
    </Carousel>
</template>

<script setup>
import Carousel from '@/components/eventCard/Carousel.vue'
import Slide from '@/components/eventCard/Slide.vue'
import { ref, onMounted } from 'vue';

const childContainer = ref(null);

onMounted(() => {
    const childContainerHeight = childContainer.value.clientHeight;
    const parentComponent = document.querySelector('.parent-component');
    parentComponent.style.marginTop = `${childContainerHeight}px`;
})

</script>

<style scoped>

</style>