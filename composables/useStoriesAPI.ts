export const useStoriesAPI = () => {
    
    const getAuthorData = async (authorIds: Array<Number>) => { Array
        const authorData = await Promise.all(authorIds.map(async (id) => {
          const author = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
          .then(res => res.json())
          .then((data) => {
            return data.title ? data : data;
          })
          return author;
        }))
        return authorData;
      }

    const getAllStories = async () => { Array
        const topStories = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then((data) => { 
          return data;
        })
        return topStories;
      }

      const getStoryData = async (storyIds: Array<Number>) => { Array
        const storyData = await Promise.all(storyIds.map(async (id) => {
          const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(res => res.json())
          .then((data) => {
            return data.title ? data : data;
          })
          return story;
        }))
        return storyData;
      }

  return {
    getAuthorData,
    getAllStories,
    getStoryData
  }
}