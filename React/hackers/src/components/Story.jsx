import { useEffect, useState } from "react";
import { getStoryById } from "../service";

//Lifecycle methods
// componentDidMount()
// componentDidUpdate()
// componentDidUnmount()

const Story = ({id}) => {
    const [story,setStory] = useState(null)

    useEffect(()=>{
        let mounted = true

        getStoryById(id).then(res => {
            if(mounted)
            setStory(res.data)
        })

        //cleanup
        return () => {mounted  = false}
    },[id])
    
    return ( 
        // story?
        <div>
            <a href={story?.url}>{story?.title}</a>
        </div>
        // :
        // null
     );
}
 
export default Story;