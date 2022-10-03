import axios from 'axios'

import { API_KEY } from './../../config';
import { groupSlice } from '../reducers/groupSlice';
import { Group } from '../../types/IGroup';

export const getGroups = () => (dispatch: any) => {
    axios.get(`${API_KEY}/api/training/?limit=10000`)
        .then(res => dispatch(groupSlice.actions.setGroups(res.data.results)))
}
export const createGroup = (group: Group) => (dispatch: any) => {
    axios.post(`${API_KEY}/api/training/`, group)
        .then(res => dispatch(groupSlice.actions.addGroup(res.data)))
}
export const deleteGroup = (id: number) => (dispatch: any) => {
    axios.delete(`${API_KEY}/api/training/${id}/`)
        .then(() => dispatch(groupSlice.actions.deleteGroup(id)))
}