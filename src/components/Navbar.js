import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal',
        };
    };

    return (
        <nav>
            <NavLink to="/" style={navLinkStyles}>
                Home
            </NavLink>
            <NavLink to="/about" style={navLinkStyles}>
                About
            </NavLink>
        </nav>
    );
};

export default Navbar;
