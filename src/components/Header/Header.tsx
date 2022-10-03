import { Link } from 'react-router-dom';

import classes from './Header.module.scss'

const routes = [
    {
        id: 0,
        route: '/personal',
        text: 'Personal'
    },
    {
        id: 1,
        route: '/clubs',
        text: 'Clubs'
    },
    {
        id: 2,
        route: '/training',
        text: 'Training'
    },
]

const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.routes}>
                {routes.map(route =>
                    <Link key={route.id} to={route.route}>
                        {route.text}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;

