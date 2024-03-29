import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"

export default function BlogPost() {
    const {id} = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
      
      },[]);
      console.log(post)
    return (
    <div>
    <h2>Blog : {id}</h2>
    <h3>userID:{post.userId}</h3>
    <h4>{post.title}</h4>
    <p>{post.body}</p>
    </div>
    )
}