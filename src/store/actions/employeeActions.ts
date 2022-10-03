import axios from 'axios'

import { API_KEY } from './../../config';
import { employeeSlice } from '../reducers/employeeSlice';
import { Employee } from '../../types/IEmployee';

export const getEmployees = () => (dispatch: any) => {
    axios.get(`${API_KEY}/api/clubs/?limit=10000`)
        .then(res => dispatch(employeeSlice.actions.setEmployees(res.data.results)))
}
export const createEmployee = (employee: Employee) => (dispatch: any) => {
    axios.post(`${API_KEY}/api/clubs/`, employee)
        .then(res => dispatch(employeeSlice.actions.addEmployee(res.data)))
}
export const deleteEmployee = (id: number) => (dispatch: any) => {
    axios.delete(`${API_KEY}/api/clubs/${id}/`)
        .then(() => dispatch(employeeSlice.actions.deleteEmployee(id)))
}