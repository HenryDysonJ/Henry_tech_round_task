import React from 'react'
import './style.css'

const Listing = (props) => {
  const { taskName ,handleDeleteTask} = props

  const handleChangeStatus = (e) => {
    console.log(e.target.checked);
  }

  return (
    <div className='list_root'>
      <span>{taskName}</span>
      <div className='action_root'>
        <input type='checkbox' className='check_box' onChange={handleChangeStatus} />
        <button className='del_btn' onClick={handleDeleteTask}> delete</button>
      </div>
    </div>
  )
}

export default Listing
