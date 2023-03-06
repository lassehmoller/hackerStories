<template>
    <div class="page-hero">
      <div class="texts">
        
        <transition name="fade">
          <h2 v-if="preHeader && revealHeaders" v-text="preHeader"/>
        </transition>

        <transition name="rise">
          <h1 v-if="header && revealHeaders" v-text="header" />
        </transition>

        </div>
  
      <img 
      src="~/assets/images/placeholder.jpg" 
      alt="'Hackernews header image'" 
      />
      <div class="overlay dark"></div>
    </div>
  </template>

<script setup lang="ts">
  const props = defineProps({
    header: { type: String, required: true },
    preHeader: { type: String, required: false, default: "" },
  });
  
  // animate headers
  const revealHeaders = ref(false);
  onMounted(() => {
      revealHeaders.value = true;
  });

</script>

<style>
.page-hero {
    position: relative;
    width: 100%;
    min-height: 50vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;
    margin-bottom: 5rem;
}
.page-hero img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
} 
.page-hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(4,15,15,0) 0%, rgba(4,15,15,0.75) 50%, rgba(4,15,15,1) 95%);

} 
.page-hero .texts {
  z-index: 1;
}



</style>