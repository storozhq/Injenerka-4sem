import React, { ChangeEvent, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { isValid } from '../../store/actions/mainActions';
import { createTask } from '../../store/actions/taskActions';
import { Task } from '../../types/ITask';

import classes from './CreateTask.module.scss'

const CreateTask = () => {

    const dispatch = useAppDispatch()

    const employees = useAppSelector(state => state.employee.employees)

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [progress, setProgress] = useState<string>('')
    const [employee, setEmployee] = useState<number>(-1)
    const [valid, setValid] = useState<boolean>(true)

    const handleSubmit = () => {
        const body: Task = {
            name: title,
            surname: description,
            age: Number(progress),
            club: [employee]
        }

        if (isValid(body)){
            dispatch(createTask(body))
            setValid(true)
        }

        
        else setValid(false)
    }

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setEmployee(Number(e.target.selectedOptions[0].id))
    }

    return (
        <div className={classes.container}>
            <h2>Create perosnal</h2>
            <input name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder='Name'/>
            <input name="description" onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} placeholder='Surname'/>
            <input name="progress" onChange={(e: ChangeEvent<HTMLInputElement>) => setProgress(e.target.value)} placeholder='Age'/>
            <select onChange={handleSelect} placeholder='Club'>
                <option disabled selected>Club</option>
                {employees.map(employee => <option id={`${employee.id}`} key={employee.id}>{employee.club_name}</option>)}
            </select>
            {!valid && <div style={{color: 'red'}}>Fill all fields</div>}
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default CreateTask;