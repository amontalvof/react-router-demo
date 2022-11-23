import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal',
        };
    };

    return (
        <nav className="primary-nav">
            <NavLink to="/" style={navLinkStyles}>
                Home
            </NavLink>
            <NavLink to="/about" style={navLinkStyles}>
                About
            </NavLink>
            <NavLink to="/products" style={navLinkStyles}>
                Products
            </NavLink>
        </nav>
    );
};

export default Navbar;
