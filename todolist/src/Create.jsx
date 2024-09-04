import React from 'react'
import axios from 'axios'


function Create() {
    const [task, setTask] = useState()
    const handleadd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
      <input type="text" name="" id="" placeholder='Enter Task' />
      <button type="button" onClick={handleadd}>Add</button>
    </div>
  )
}

export default Create
