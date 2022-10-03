import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Employee } from '../../../types/IEmployee';

import classes from './EmployeePage.module.scss'
import { deleteEmployee } from '../../../store/actions/employeeActions';

const EmployeePage = () => {

    const dispatch = useAppDispatch()

    const employees = useAppSelector((state) => state.employee.employees)

    useEffect(() => {
        if (employees.length) setSortedArr(employees)
    }, [employees])

    const [sortedArr, setSortedArr] = useState<Employee[]>()
    const [sort, setSort] = useState<string>('')
    const [page, setPage] = useState<number>(0)

    const changeSort = () => {
        if (sort === '') setSort('A-z')
        else if (sort === 'A-z') setSort('Z-a')
        else if (sort === 'Z-a') setSort('A-z')
    }

    useEffect(() => {
        let tempArr = [...employees]
        if (sort === 'A-z') setSortedArr(tempArr.sort((a, b) => a.club_name.localeCompare(b.club_name)))
        else if (sort === 'Z-a') setSortedArr(tempArr.sort((a, b) => b.club_name.localeCompare(a.club_name)))
    }, [sort])

    const handleDelete = (id: any) => {
        dispatch(deleteEmployee(id))
    }

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h2>Club</h2>
                <div className={classes.sort}>
                    <span>Sort by club name:</span>
                    {
                        sort === 'A-z'
                            ?
                            <button onClick={changeSort}><FaArrowDown /></button>
                            :
                            <button onClick={changeSort}><FaArrowUp /></button>
                    }
                </div>
                <div className={classes.page}>
                    <button onClick={() => setPage(page - 1)} disabled={page === 0}><FaArrowLeft /></button>
                    <button onClick={() => setPage(page + 1)} disabled={employees.length / 3 <= page + 1}><FaArrowRight /></button>
                </div>
            </div>
            {sortedArr?.slice(page * 3, (page + 1) * 3).map((employee) =>
                <div className={classes.item}>
                    <div className={classes.main}>
                        <div><span>Club name:</span> <span>{employee.club_name}</span></div>
                        <div><span>Open date:</span> <span>{employee.date}</span></div>
                        <div><span>Location:</span> <span>{employee.location}</span></div>
                        <div><span>Work hours:</span> <span>{employee.workin_hours}</span></div>
                        <div><span>Amount:</span> <span>{employee.amount}</span></div>
                    </div>
                    <div className={classes.delete}>
                        <button onClick={() => handleDelete(employee.id)}><MdDelete /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeePage;