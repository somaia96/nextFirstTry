import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'ArticlePage',
  }
  
const ArticlePage = () => {
  return (
    <div>
      <h1>Article Page</h1>
        <Link href="/posts">
        <button>posts page</button>
        </Link>
        <Link href="/">
        <button>home</button>
        </Link>
    </div>
  )
}

export default ArticlePage
