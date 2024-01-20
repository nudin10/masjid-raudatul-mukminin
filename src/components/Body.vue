<template>
    <body class="mx-6 md:mx-14 mt-5 ">
        <div class="mt-12">
            <Segment :segmentName="'Acara'"/>
            <EventCard/>
        </div>
    </body>
</template>

<script setup>
import EventCard from '@/components/eventCard/EventCard.vue';
import Segment from '@/components/Segment.vue';
</script>