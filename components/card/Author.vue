<template>
    <div class="author">
        <p><small>{{data.id}} - {{  formatNumber(data.karma) }} karma points</small></p>
    </div>
</template>

<script setup lang="ts">
    const { formatNumber } = useHelpers();
   const props = defineProps({
        data: { type: Object, required: true }
      });

</script>