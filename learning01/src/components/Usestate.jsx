import React, { useState } from 'react'

const Usestate = () => {

    const [color,setcolor] = useState("red")
  return (
    <>
    <h1>My favorite color is {color}</h1>
    <button
    type='button'
    onClick={() => setcolor("blue")}>
    blue
    </button>
    <button
    type='button'
    onClick={() => setcolor("green")}>
    green
    </button>
    <button
    type="button"
    onClick={() => setcolor("yellow")}>
    yellow
    </button>
    </>
  )
}

export default Usestate