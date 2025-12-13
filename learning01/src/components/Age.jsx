import React, { useState } from 'react'

const Age = () => {

    const [user , setUser] = useState({
        name: 'john',
        age: 24
    })
  return (
    <div>
        <button onClick={() => setUser({...user , age : user.age + 1})}
        >
            increase age
        </button>
        <p>{user.name}- {user.age}</p>
    </div>
  )
}

export default Age