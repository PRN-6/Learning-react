import {useState ,React } from 'react'

const Array = () => {

    const [data , setData] = useState([1,2,3])

    function addNumber(){
        setData([...data, data.length + 1])
    }

  return (
    <div>
        <button onClick={addNumber}>Add</button>
        <ul>
            {data.map((n) => <li key={n}>{n}</li>)}
        </ul>
    </div>
  )
}

export default Array