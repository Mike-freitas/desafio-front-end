import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h1>Sessão</h1>
                    <ul>
                        <li><a className="footer-link" href="#">Início</a></li>
                        <li><a className="footer-link" href="#sobre-nos">Sobre Nós</a></li>
                        <li><a className="footer-link" href="#servicos">Serviços</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h1>Contato</h1>
                    <ul>
                        <li><a className="footer-link" href="mailto:your-email@example.com">Email</a></li>
                        <li><a className="footer-link" href="https://wa.me/yourwhatsappnumber">WhatsApp</a></li>
                        <li><a className="footer-link" href="https://www.instagram.com/yourprofile">Instagram</a></li>
                        <li><a className="footer-link" href="https://www.facebook.com/yourprofile">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;