import React, { useState } from 'react';
import './header.scss';

const headerData = {
    logo: "https://www.mdsystemweb.com.br/projects/api/v1/test/images/logo.png",
    menu: [
        { label: "Sobre Nós", link: "#sobre-nos" },
        { label: "Serviços", link: "#servicos" }
       
    ]
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 50, 
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false); 
    };

    return (
        <header className="header">
            <div className="header-container">
                <img 
                    src={headerData.logo} 
                    alt="Logo" 
                    className="logo"
                />
                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="hamburger-icon"></div>
                </div>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="menu">
                        {headerData.menu.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} onClick={(e) => handleScroll(e, item.link)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
