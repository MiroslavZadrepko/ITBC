import { useEffect, useState } from "react";
import Story from "./components/Story";
import { getAskStories, getJobStories, getShowStories, getStoryById, getTopStoriesIds } from "./service";


function App() {
  //const [stories,setStories] = useState([])
  const [storiesIds,setStoriesIds] = useState([])

  useEffect(()=>{
    getTopStoriesIds().then(res => {
      setStoriesIds(res.data)
    })
  },[])

  return (
    <div>
      <h1>HackerNews</h1>

      <button onClick={()=>{
        getAskStories().then(res => {
          setStoriesIds(res.data)
        })
      }}>ASK</button>
      <button onClick={()=>{
        getJobStories().then(res => {
          setStoriesIds(res.data)
        })
      }}>JOB</button>
      <button onClick={()=>{
        getShowStories().then(res => {
          setStoriesIds(res.data)
        })
      }}>SHOW</button>

      {storiesIds.map(storyId => <Story key={storyId} id = {storyId}/>)}
    </div>
  );
}

export default App;
