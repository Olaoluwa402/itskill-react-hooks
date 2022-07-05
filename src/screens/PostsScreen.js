import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Posts from '../components/API/Posts'

function PostsScreen() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetchPhotos()
    },[])

    const fetchPhotos = async ()=>{
        const url = `https://jsonplaceholder.typicode.com/photos`
        try{
            const {data} = await axios.get(url)
            const copy = data.slice(0,20)
            setPosts(copy)
            console.log(copy)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <Posts posts={posts}/>
    </div>

  )
}

export default PostsScreen