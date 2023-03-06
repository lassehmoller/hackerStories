export const useHelpers = (authors: Array<Object>) => {

  const pickRandomEntries = (numberOfIds: Number, allStoryIds: Array<Number>) =>  { Array
    const randomIndexes = Array.from({length: numberOfIds}, () => Math.floor(Math.random() * allStoryIds.length));      
    return randomIndexes.map((index) => allStoryIds[index]);
  }
  const addAuthorDataToStoryData = (authorData: Array<Object>, storyData: Array<Object>) =>  { Array<Object>

    storyData.map((story) => {
      const author = authorData.find((author) => author.id === story.by);
      story.author = author;
      return story;
    })
    return storyData;
  }

  const sortStories = (stories: Array<Object>) => { Array<Object> 
    return stories.sort((a, b) => b.score - a.score);
  }

  const formatNumber = (number: Number) => { String
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  return {
    pickRandomEntries,
    addAuthorDataToStoryData,
    sortStories,
    formatNumber
  }
}