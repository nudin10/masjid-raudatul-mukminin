<template>
  <UpButton />
  <Header />

  <body>
    <SectionOne/>
    <SectionThree id="pengenalan"/>
    <SectionTwo/>
  </body>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</template>

<script setup>
import Header from '@/components/Header.vue';
// import Body from '@/components/Body.vue';
// import Banner from '@/components/Banner.vue';
import Segment from '@/components/Segment.vue'
import UpButton from '@/components/UpButton.vue'
import SectionOne from '@/components/SectionOne.vue'
import SectionTwo from '@/components/SectionTwo.vue'
import SectionThree from '@/components/SectionThree.vue'
</script>
