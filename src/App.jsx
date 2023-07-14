
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  
  const [value, setValue] = useState("")
  const [list, setList] = useState(() => {
    const data = localStorage.getItem('key')
    if(data == null) return []
    return JSON.parse(data)
  })

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(list))
  }, [list])


  const handleClick = (e) => {
    if(value) setList(list.concat(value))
    setValue('')
    e.preventDefault()
    console.log(list)
  }
  const handleDelete = () => {
    const newList = list.filter((item) => item !== item)
    setList(newList)
  }
  
    

  
 

  return (
    <>
    <h1 className='header'>Todo List</h1>
     <form className='new-item-form'>
        <div className='form-div'>
          <label htmlFor="item">New Item: </label>
          <input  type='text' id='item' onChange={(e) => setValue(e.target.value)} value={value}/>
          <button className='btn' onClick={handleClick}>Add</button>
        </div>
     </form>
     
     <h2 className='header-list'>List of items:</h2>
     <ul className='list'>
        {list.map(item => (
          <li key={item}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
          </li>
        ))}
     </ul>
     <button className='btn btn-danger' onClick={() => handleDelete()}> Delete All</button>
    </>
  )
}

