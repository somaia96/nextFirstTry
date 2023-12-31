import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"50px",
      background:"teal",
      padding:"20px",
      width:"100%",
      gap:"40px"}}>
          <Link href="/">home</Link>
          <Link href="/article/featuredArticle">featured Article</Link>

          <Link href="/article">article</Link>
          <Link href="/posts">posts</Link>

        </nav>
        {children}</body>
    </html>
  )
}
