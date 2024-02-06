<template>
    <body class="mx-6 md:mx-14 pt-10 ">
        <Description/>
        <div class="mt-12">
            <Segment :segmentName="'Acara'"/>
            <EventCard/>
        </div>
    </body>
</template>

<script setup>
import EventCard from '@/components/eventCard/EventCard.vue';
import Segment from '@/components/Segment.vue';
import Description from '@/components/Description.vue';
</script>