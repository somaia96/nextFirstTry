import React from 'react'

const PostDetCom = async({postId}) => {
    let response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let post = await response.json()
  return (
    <div style={{display:"flex",background:"red",alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center",padding:"40px"}}>
      {/* {props.params.det} */}
      <h1>{post.title}</h1>
      <p>{post.body}</p>

    </div>
  )
}

export default PostDetCom
