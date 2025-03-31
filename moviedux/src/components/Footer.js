import React from 'react';
import '../styles.css';

// We can also use a name instead of default
export default function Footer() {
    const currentYear = new Date().getFullYear();

    // curly braces
    return (
        <footer className='footer'>
            <p className='footer-text'>
                (C) {currentYear} Moviedux, All rights reserved.
            </p>
        </footer>
    );
}