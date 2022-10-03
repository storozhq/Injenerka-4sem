import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Task } from '../../../types/ITask';

import classes from './TasksPage.module.scss'
import { deleteTask } from '../../../store/actions/taskActions';

const TasksPage = () => {

    const dispatch = useAppDispatch()

    const tasks = useAppSelector((state) => state.task.tasks)

    useEffect(() => {
        if (tasks.length) setSortedArr(tasks)
    }, [tasks])

    const [sortedArr, setSortedArr] = useState<Task[]>()
    const [sort, setSort] = useState<string>('')
    const [page, setPage] = useState<number>(0)

    const changeSort = () => {
        if (sort === '') setSort('A-z')
        else if (sort === 'A-z') setSort('Z-a')
        else if (sort === 'Z-a') setSort('A-z')
    }

    useEffect(() => {
        let tempArr = [...tasks]
        if (sort === 'A-z') setSortedArr(tempArr.sort((a, b) => a.name.localeCompare(b.name)))
        else if (sort === 'Z-a') setSortedArr(tempArr.sort((a, b) => b.name.localeCompare(a.name)))
    }, [sort])

    const handleDelete = (id: any) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <h2>Personal</h2>
                <div className={classes.sort}>
                    <span>Sort by name:</span>
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
                    <button onClick={() => setPage(page + 1)} disabled={tasks.length / 3 <= page + 1}><FaArrowRight /></button>
                </div>
            </div>
            {sortedArr?.slice(page * 3, (page + 1) * 3).map((task) =>
                <div className={classes.item}>
                    <div className={classes.main}>
                        <div><span>Name:</span> <span>{task.name}</span></div>
                        <div><span>Surname:</span> <span>{task.surname}</span></div>
                        <div><span>Age:</span> <span>{task.age}</span></div>
                        <div><span>Club:</span> <span>{task.club}</span></div>
                    </div>
                    <div className={classes.delete}>
                        <button onClick={() => handleDelete(task.id)}><MdDelete /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TasksPage;