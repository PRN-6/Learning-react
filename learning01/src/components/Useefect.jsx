import React, { useEffect, useState } from 'react'

const Useefect = () => {
    const [count,setcount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
  return (
    <div>
        <p>you clicked {count} times</p>
        <button onClick={() => setcount(count + 1)}>click me</button>

    </div>
  )
}

export default Useefect