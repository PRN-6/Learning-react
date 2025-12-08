import React, { useState } from 'react'

const Inputs = () => {

    const [text , setText] = useState('')
  return (
    <div>
        <input 
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}/>

            <p> the name is 
                {text}</p>
    </div>
  )
}

export default Inputs