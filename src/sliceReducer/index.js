import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
    data: []
};

export const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {

        listingInitialData: (state, action) => {
            state.data = action.payload?.map((item)=>item?.name)
            
         },

        addTask: (state, action) => {
            state.data.push(action.payload)
        },

        deleteTask: (state, action) => {
            const deleteData = state.data.filter((item, i) => i !== action.payload)
            state.data = deleteData
        }
    }

})

export const { addTask, deleteTask, listingInitialData } = taskReducer.actions
export default taskReducer.reducer
