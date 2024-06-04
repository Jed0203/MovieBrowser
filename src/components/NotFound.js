import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404</h1>
        <p>Oops! The page you are looking for cannot be found.</p>
        <p><Link to="/">Go to Homepage</Link></p>
    </div>
);

export default NotFound;
