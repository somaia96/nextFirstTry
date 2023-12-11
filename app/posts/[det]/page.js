import PostDetCom from '@/app/components/postDetCom'
import React, { Suspense } from 'react'
import Loading from './loading'
const Page = async(props) => {
    let loadPage = (<div><h1>Loading by suspense</h1></div>)
  return (
    <div>
        <h1>out of loading page</h1>
        <Suspense fallback={loadPage}>

        {/* <Suspense fallback={<Loading/>}> */}
        <PostDetCom postId={props.params.det}/>
        </Suspense>
    </div>
  )
}

export default Page
