import React from 'react'

const Link = ({name}) => {
  return (
      <div style={{color:"teal",marginLeft:"15px",fontSize:"15px",color:"rgb(147,148,153)",fontWeight:"500",cursor:"pointer"}}>

          <p>{name}</p>
      </div>
  )
}

export default Link