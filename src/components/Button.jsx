import React from 'react'

const Button = ({name}) => {
  return (
    <button style={{width:"70px", height:"25px",borderRadius:"10px",border:"1px solid gray",marginTop:"12px",background:"rgb(0,134,166)",color:"whitesmoke",cursor:"pointer"}}>{name}</button>
  )
}

export default Button