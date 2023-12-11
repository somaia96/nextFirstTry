import React from 'react'

const showArticlePage = (props) => {
    console.log(props);
  return (
    <div>
      article information
      <h2>{props.params.title}</h2>
    </div>
  )
}

export default showArticlePage
