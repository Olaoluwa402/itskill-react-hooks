import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Post from '../components/API/Post'
 
function PostScreen() {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(()=> {
        fetchPhoto()
    },[id])

    const fetchPhoto = async ()=>{
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        try{
            const {data} = await axios.get(url)
            setPost(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <h2>{post.title}</h2>
        <img src={post.url} alt={post.title} />
        <Link to='/posts'>Back to posts</Link>
    </div>
  )
}

export default PostScreen