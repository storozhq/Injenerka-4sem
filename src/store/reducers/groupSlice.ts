import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Group } from "../../types/IGroup";

export interface GroupState {
    groups: Group[];
}

const initialState: GroupState = {
    groups: [],
}

export const groupSlice = createSlice({
    name: 'groupSlice',
    initialState,
    reducers: {
        setGroups(state, action: PayloadAction<Group[]>) {
            state.groups = action.payload
        },
        addGroup(state, action: PayloadAction<Group>){
            state.groups.push(action.payload)
        },
        deleteGroup(state, action: PayloadAction<number>){
            state.groups = state.groups.filter(group => group.id !== action.payload)
        }
    }
})

export default groupSlice.reducer