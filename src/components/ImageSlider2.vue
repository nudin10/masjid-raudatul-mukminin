<template>
   <fwb-carousel :pictures="pictures" slide no-controls :slide-interval="3000" animation/>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'
// import img from '../assets/images/jemaah.jpg'
// import img2 from '../assets/images/default-wp.jpg'
// import img3 from '../assets/images/masjid-pagi.jpg'

const pictures = [
  {src: 'src/assets/images/jemaah.jpg', alt: 'Image 1'},
  {src: 'src/assets/images/img-1.jpg', alt: 'Image 2'},
  {src: 'src/assets/images/masjid-pagi.jpg', alt: 'Image 3'},
  {src: 'src/assets/images/img-2.jpg', alt: 'Image 4'},
  {src: 'src/assets/images/img-3.jpg', alt: 'Image 5'},
  {src: 'src/assets/images/img-4.jpg', alt: 'Image 6'},
]

</script>