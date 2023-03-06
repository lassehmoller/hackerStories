<template>
    <div v-if="loading" class="">
      <div class="load-animation"></div>
    </div>    
</template>

<script setup lang="ts">
    const props = defineProps({
     loading: { type: Boolean, required: true },
    });
</script>