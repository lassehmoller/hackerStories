<template>
  <div>
    <transition name="fade-fast" mode="out-in">
      <div v-if="loading" key="loader" class="center-content">
        <div class="width-half section-space-small">
          <LoaderAnimation :loading="loading"/>
        </div>
      </div>

      <div v-else key="archive" class="archive-grid">
        <HackerStory
        v-for="(story, index) in stories"
        :key="`story-${story.id}`" 
        :data="story" 
        :index="index"
        />
      </div>


    </transition> 
    
    


  </div>

</template>

<script setup lang="ts">

  const storiesForDisplay =  async (numberOfStoriesToGet: Number) => { Array
    // set loading state
    loading.value = true;

    // get all top stories from API
    const allStoryIds = await getAllStories();

    // randomly choose the amount passed to function from all stories
    const randomStoryIds = await pickRandomEntries(numberOfStoriesToGet, allStoryIds); 
    
    // get the story data for each random id
    const storyData = await getStoryData(randomStoryIds);

    // unique author ids
    const uniqueAuthorIds = Array.from( new Set( storyData.map((story) => story.by) ) );
    
    // get author data for each author id
    const authorData = await getAuthorData(uniqueAuthorIds);
    
    // add author score to story data
    addAuthorDataToStoryData(authorData, storyData);

    // sort stories by score
    sortStories(storyData);

    // set loading state
    loading.value = false;
    return storyData;
    
  }
  
  const { getAuthorData, getAllStories, getStoryData } = useStoriesAPI();
  const { pickRandomEntries, addAuthorDataToStoryData, sortStories } = useHelpers();

  const loading = ref<boolean>(false);
  let stories = reactive([] as Array<Object>);

  onMounted(async () => {
    stories.push( ... await storiesForDisplay(10) );
  })
  

</script>