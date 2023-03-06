<template>
  <a class="story-link" :href="data" target="_blank"><LinkArrow /></a>  
</template>

<script setup lang="ts">
    const props = defineProps({
     data: { type: String, required: true },
    });
</script>
