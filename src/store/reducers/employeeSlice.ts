import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "../../types/IEmployee";

export interface EmployeeState {
    employees: Employee[];
}

const initialState: EmployeeState = {
    employees: [],
}

export const employeeSlice = createSlice({
    name: 'employeeSlice',
    initialState,
    reducers: {
        setEmployees(state, action: PayloadAction<Employee[]>) {
            state.employees = action.payload
        },
        addEmployee(state, action: PayloadAction<Employee>){
            state.employees.push(action.payload)
        },
        deleteEmployee(state, action: PayloadAction<number>){
            state.employees = state.employees.filter(employee => employee.id !== action.payload)
        }
    }
})

export default employeeSlice.reducer