import React from 'react';
import './Header.css';
function Header() {
    return (
        <nav className="container">
            <ul>
                <li><a href="/premium">Premium</a></li>
                <li><a href="/help">Help</a></li>
                <li><a href="/download">Download</a></li>
                <li>|</li>
                <li><a href="/signup">Sign up</a></li>
                <li><a href="/login">Log In</a></li>
            </ul>
        </nav>
    );
}

export default Header;