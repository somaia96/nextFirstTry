// import React from 'react'
import Link from 'next/link'
import Todo from '../components/todo'
const PostsPage = async () => {
    let response=await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json()
    // console.log(response);

      // .then(response => response.json())
      // .then(json => console.log(json))
        let showPost=()=>{
        }
  return (

    <div className='posts'>
      {/* <h1>posts page</h1> */}
    {posts.map((post,i)=>{
      return(
        <Link href={`posts/${post.id}`}>
      <div onClick={showPost()} className='post' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Link>
      )
    })}
      {/* <div>
        <Todo/>
      </div> */}
    </div>
    // </div>
  )
}

export default PostsPage
