import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <div>
                <input type="search" placeholder="Search" />
            </div>
            <nav>
                <Link to="/products/featured">Featured</Link>
                {/* this to links work in the same way */}
                <Link to="new">New</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Products;
