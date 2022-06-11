import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const { color } = useTheme();


    return (
    <div className={classes.navbar} style={ {backgroundColor: color} }>
        <nav>
            <Link to='/' className={classes.brand}>
                <h1>Internship Task</h1>
            </Link>
        </nav>
    </div>
    )
};

export default Navbar;