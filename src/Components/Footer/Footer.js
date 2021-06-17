import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer' >
           Copyright &copy; <Link to="/"> mytodos.com </Link>
        </div>
    )
}

export default Footer
