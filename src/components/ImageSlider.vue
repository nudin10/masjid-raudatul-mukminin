<template>
    <div class="">
        <div id="slider-container" class="m-auto h-full flex flex-col items-center justify-center">
            <div v-for="(image, index) in images" :key="index" class="slide hidden duration-700 ease-in-out overflow-hidden rounded-lg h-96 bg-white">
                <img :src="image" class="min-h-full min-w-full" alt="">
            </div>
            <div class="mt-8 text-center text-white">
                Aktiviti solat Jumaat
            </div>
        </div>
    </div>
</template>

<script setup>
import img from '../assets/images/solat.jpg'
import img2 from '../assets/images/default-wp.jpg'
import img3 from '../assets/images/masjid-pagi.jpg'

var images = [img, img2, img3];
</script>

<style scoped>
.slide{
    display: none;
}
.slide:first-child{
    display: block;
}
</style>