import React from 'react'
import "./clock.css"
import clockImg from "./utils/reloj.png"

export default function Clock({clockColor}) {
  return (
    <div>
      <img src={clockImg} className={"clck clck--"+clockColor} alt="img"/>
    </div>
  )
}
