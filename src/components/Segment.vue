<template>
    <div class="w-full text-right text-4xl px-6 pb-6">
        {{ segmentName }}
    </div>
</template>

<script setup>
const props = defineProps(["segmentName"])
</script>