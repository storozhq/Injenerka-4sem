import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pages, Task } from "../../types/ITask";

export interface TaskState {
    tasks: Task[];
    pages: Pages;
}

const initialState: TaskState = {
    tasks: [],
    pages: new Object() as Pages 
}

export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<Task[]>) {
            state.tasks = action.payload
        },
        setPages(state, action: PayloadAction<Pages>){
            state.pages = action.payload
        },
        addTask(state, action: PayloadAction<Task>){
            state.tasks.push(action.payload)
        },
        deleteTask(state, action: PayloadAction<number>){
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export default taskSlice.reducer