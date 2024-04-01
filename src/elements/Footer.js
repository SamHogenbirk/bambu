import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Bambu.farm</h3>
               
                {/* <ul className="socials">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul> */}
            </div>
            <div className="footer-subscription">
                <p>Abonneer op onze nieuwsbrief</p>
                <input type="email" placeholder="Uw email" />
                <button>Abonneer</button>
            </div>
        </footer>
    );
};

export default Footer;
