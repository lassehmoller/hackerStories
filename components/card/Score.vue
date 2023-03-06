<template>
    <div class="score">
        <p><small>{{  score  }}p</small></p>
    </div>
</template>

<script setup lang="ts">
    const { formatNumber } = useHelpers();
   const props = defineProps({
        score: { type: Number, required: true },
      });

</script>