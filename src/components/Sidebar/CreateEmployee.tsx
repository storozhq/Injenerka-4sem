import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { isValid } from '../../store/actions/mainActions';
import { Employee } from '../../types/IEmployee';
import { createEmployee } from '../../store/actions/employeeActions';

import classes from './CreateEmployee.module.scss'

const CreateEmployee = () => {

    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [salary, setSalary] = useState<string>('')
    const [valid, setValid] = useState<boolean>(true)
    const [amount, setAmount] = useState<number>(-1)

    const handleSubmit = () => {
        const body: Employee = {
            club_name: name,
            location: surname,
            workin_hours: age,
            date: salary,
            amount: amount
        }

        if (isValid(body)){
            dispatch(createEmployee(body))
            setValid(true)
        }
        else setValid(false)
    }

    return (
        <div className={classes.container}>
            <h2>Create club</h2>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder='Club name'/>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)} placeholder='Location'/>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} placeholder='Work hours' type="string"/>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setSalary(e.target.value)} placeholder='Open date' type="date"/>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))} placeholder='Amount' type="number"/>
            {!valid && <div style={{color: 'red'}}>Fill all fields</div>}
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default CreateEmployee;