<template>
   <fwb-carousel :pictures="pictures" slide no-controls :slide-interval="3000" animation/>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'
import img1 from '../assets/images/img-1.jpg'
import img2 from '../assets/images/img-2.jpg'
import img3 from '../assets/images/img-3.jpg'
import img4 from '../assets/images/img-4.jpg'

const pictures = [
  {src: 'src/assets/images/jemaah.jpg', alt: 'Image 1'},
  {src: img1, alt: 'Image 2'},
  {src: 'src/assets/images/masjid-pagi.jpg', alt: 'Image 3'},
  {src: img2, alt: 'Image 4'},
  {src: img3, alt: 'Image 5'},
  {src: img4, alt: 'Image 6'},
]

</script>