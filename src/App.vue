<template>
  <UpButton />

  <body class="">
    <main class="min-h-screen max-w-screen-xl p-4 font-default text-white m-auto">
      <Header />
      <Banner />

      <Body />
    </main>

  </body>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</template>

<script setup>
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';
import Banner from '@/components/Banner.vue';
import UpButton from '@/components/UpButton.vue'
</script>
