import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './sliceReducer/index';



export const store = configureStore({
    devTools:true,
    reducer: {
        taskReducer: taskReducer
    }

})