import React, { useRef } from 'react'
import {useState} from "react"
const Refs2 = () => {

  let [img,setImage]=useState("https://upload.wikimedia.org/wikipedia/en/7/7e/SHAKTIMAAN.gif")
       let imgref=useRef("")
       let btnref=useRef("")
       let ChangeBorder=()=>{
        imgref.current.style.border="5px solid red"
        imgref.current.style.width="200px"
        imgref.current.style.height="200px"
        btnref.current.style.border="5px solid green"
        btnref.current.style.backgroundcolor="blue"
        
       }
  return (
    <div>
       <img src={img} alt="" ref={imgref} />
       <button ref={btnref} onClick={ChangeBorder}>Change Border</button>
    </div>
  )
}

export default Refs2