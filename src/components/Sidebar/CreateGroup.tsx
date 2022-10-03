import React, { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { isValid } from '../../store/actions/mainActions';
import { createGroup } from '../../store/actions/groupActions';
import { Group } from '../../types/IGroup';

import classes from './CreateGroup.module.scss'

const CreateGroup = () => {

    const dispatch = useAppDispatch()

    const employees = useAppSelector(state => state.employee.employees)
    const tasks = useAppSelector(state => state.task.tasks)

    const [groupName, setGroupName] = useState<string>('')
    const [leader, setLeader] = useState<number>(-1)
    const [task, setTask] = useState<number>(-1)
    const [valid, setValid] = useState<boolean>(true)
    const [datetime, setDatetime] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleSubmit = () => {
        const body: Group = {
            training: groupName,
            personal: [leader],
            club: [task],
            description: description,
            datetime: datetime
        }

        if (isValid(body)){
            dispatch(createGroup(body))
            setValid(true)
        }

        
        else setValid(false)
    }

    const handleSelect1 = (e: ChangeEvent<HTMLSelectElement>) => {
        setLeader(Number(e.target.selectedOptions[0].id))
    }
    const handleSelect2 = (e: ChangeEvent<HTMLSelectElement>) => {
        setTask(Number(e.target.selectedOptions[0].id))
    }

    return (
        <div className={classes.container}>
            <h2>Create training</h2>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupName(e.target.value)} placeholder='Training'/>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} placeholder='Description'/>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setDatetime(e.target.value)} placeholder='Datetime' type="date"/>
            <select onChange={handleSelect1} placeholder='Leader'>
                <option disabled selected>Personal</option>
                {employees.map(employee => <option id={`${employee.id}`} key={employee.id}>{employee.club_name}</option>)}
            </select>
            <select onChange={handleSelect2} placeholder='Leader'>
                <option disabled selected>Club</option>
                {tasks.map(task => <option id={`${task.id}`} key={task.id}>{task.name}</option>)}
            </select>
            {!valid && <div style={{color: 'red'}}>Fill all fields</div>}
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default CreateGroup;