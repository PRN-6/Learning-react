import React, { useState } from 'react'

const Toggle = () => {
    const [change , setChange] = useState(true)
  return (
    <div>
      <button onClick={() => {setChange(!change)}}>
        {change ? 'on' : 'off'}
      </button>
      {change && <h1>Hello World</h1>}

    </div>
    )
}

export default Toggle