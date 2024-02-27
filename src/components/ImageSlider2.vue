<template>
  <fwb-carousel :pictures="pictures" slide no-controls no-indicators :slide-interval="tick" animation />
  <div class="w-full text-center">
    <p class="text-white font-arabic text-3xl w-full mt-6">
      {{ caption }}
    </p>
    <p class="italic text-xs text-teal-500 px-8">
      {{ captionRumi }}
    </p>
  </div>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'
import img1 from '../assets/images/img-1.jpg'
import img2 from '../assets/images/img-2.jpg'
import img3 from '../assets/images/img-3.jpg'
import img4 from '../assets/images/img-4.jpg'
import imgJemaah from '../assets/images/jemaah.jpg'
import imgPagi from '../assets/images/masjid-pagi.jpg'
import { onMounted, ref } from 'vue'

const tick = 3000

const pictures = [
  { src: imgJemaah, alt: 'Image 1' },
  { src: img1, alt: 'Image 2' },
  { src: imgPagi, alt: 'Image 3' },
  { src: img2, alt: 'Image 4' },
  { src: img3, alt: 'Image 5' },
  { src: img4, alt: 'Image 6' },
]

let captions = [
  {
    "jawi": "جماعه مسجد",
    "rumi": "jemaah masjid"
  },
  {
    "jawi": "ڤمنداڠن مالم مسجد",
    "rumi": "pemandangan malam masjid"
  },
  {
    "jawi": "ڤمنداڠن ڤاڬي مسجد",
    "rumi": "pemandangan pagi masjid"
  },
  {
    "jawi": "فوتو مسجد ساتو",
    "rumi": "foto masjid satu"
  },
  {
    "jawi": "علامت مسجد",
    "rumi": "alamat masjid"
  },
  {
    "jawi": "ڤمنداڠن مسجد مالم دوا",
    "rumi": "pemandangan malam masjid dua"
  },
]
let caption = ref(captions[0].jawi)
let captionRumi = ref(captions[0].rumi)
let currentIdx = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIdx.value += 1
    if (currentIdx.value == captions.length) {
      currentIdx.value = 0
    }
    caption.value = captions[currentIdx.value].jawi
    captionRumi.value = captions[currentIdx.value].rumi

    console.log()
  }, tick)
})

</script>