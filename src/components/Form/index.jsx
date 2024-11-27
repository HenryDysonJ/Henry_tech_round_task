import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, listingInitialData } from '../../sliceReducer/index'
import Listing from '../listing'
import './style.css'

const FromComponent = () => {
    const [inputValue, setInputValue] = useState('')

    const listingData = useSelector((state) => state.taskReducer.data)


    const dispatch = useDispatch()

    const handleAddTask = () => {
        dispatch(addTask(inputValue))
        setInputValue('')
    }
    const handleDeleteTask = (i) => {
        dispatch(deleteTask(i))
        setInputValue('')
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => dispatch(listingInitialData(data)))
    }, [])

    return (
        <>
            <div className='form-root'>
                <h2 className='form_title'>FromComponent</h2>
                <div className='form_container'>
                    <input value={inputValue} placeholder='Enter task' className='task_input' onChange={(e) => setInputValue(e.target.value)} />
                    <button className='add_btn' onClick={handleAddTask}>Add task</button>
                </div>
                <div className='list'>
                {
                    listingData?.length > 0 && listingData?.map((list, i) => (
                        <Listing taskName={list} handleDeleteTask={() => handleDeleteTask(i)} />
                    ))
                }
                </div>
            </div>
        </>

    )
}

export default FromComponent