import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Home Page</div>
            <br />
            <button onClick={() => navigate('order-summary')}>
                Place order
            </button>
        </>
    );
};

export default Home;
