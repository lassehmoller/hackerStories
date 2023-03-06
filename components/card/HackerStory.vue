<template>
    <div 
    ref="card" 
    class="card" 
    :style="`--delay:${index % 3 * 100}ms`" 
    :class="{'pre-fade-in-up' : !cardDisplayState}"
    >
        <div class="card-top">
            <img src="~/assets/images/placeholder-card.jpg" />
            <Author :data="data.author"/>
            <Score v-if="data.score" :score="data.score"/>
        </div>
        <div class="card-content">
            <h3 v-text="data.title" />
            
            <div class="to-bottom" >
                <StoryLink v-if="data.url" :data="data.url" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
    index: { type: Number, required: true },
});

const card = ref<HTMLElement | undefined>(undefined);

const {intersectionRoot} = useIntersectionObserver();

const revealStory = intersectionRoot(([entry])=>{ changeCardState( entry ) }, '0px 0px -10% 0px', 0.1)

const cardDisplayState = ref<boolean>(false);

const changeCardState = (entry: IntersectionObserverEntry) => { 
    if (entry.isIntersecting) {
        cardDisplayState.value = true;
    }
}



// revealStory.observe(card)

onMounted(()=>{
    revealStory.observe(card.value)
})

</script>