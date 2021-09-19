import React from 'react';

const Header = () => {
    return (
        <header>
            <div>
                <nav>
                    <ul className="head">
                        <li className="menu"><a href="#home">.</a></li>
                        <li className="menu"><a href="#home">Cymraeg</a></li>
                        <li className="menu"><a href="#search">Search</a></li>
                        <li className="menu"><a href="#contact">Get In Touch</a></li>
                        <li className="menu"><a href="#about">About Us</a></li>
                        <li className="menu"><a href="#clubs">Clubs</a></li>
                        <li className="menu"><a href="/">Home</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;