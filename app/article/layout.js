export default function Layout({ children }) {
    // console.log({children});
  return (
    <div>
        article global
       <div style={{marginTop:"50px",background:"babyblue",padding:"10px",borderRadius:"10px"}}>{children}</div>
    </div>
  )
}
