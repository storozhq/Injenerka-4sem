import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CreateTask from './CreateTask';
import CreateGroup from './CreateGroup';
import CreateEmployee from './CreateEmployee';

import classes from './Sidebar.module.scss'

const Sidebar = () => {

    const location = useLocation()

    const CreateItem = () => {
        switch(location.pathname){
            case '/personal':
                return (
                    <CreateTask/>
                )
            case '/clubs':
                return (
                    <CreateEmployee/>
                )
            case '/training':
                return (
                    <CreateGroup/>
                )
        }
        return (<></>)
    }


    return (
        <div className={classes.container}>
            <CreateItem />
        </div>
    );
};

export default Sidebar;