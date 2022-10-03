import { combineReducers, configureStore } from "@reduxjs/toolkit";

import groupSlice from './reducers/groupSlice';
import taskSlice from './reducers/taskSlice';
import employeeSlice from './reducers/employeeSlice';

const rootReducer = combineReducers({
    group: groupSlice,
    task: taskSlice,
    employee: employeeSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']