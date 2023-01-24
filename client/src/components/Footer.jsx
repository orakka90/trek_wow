import React from 'react';
import styles from '../style.css'
import logo from './images/icon-modified.png'; // with import

const Footer = () => {
    return (
        <div className='footer' >
            <div className='left column'>
                <img className='logo' src={logo} />
            </div>
            <div class="footer-basic">
                <footer>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="/about-us">About Us</a></li>
                        <li class="list-inline-item"><a href="/contact-us">Contact Us</a></li>
                        <li class="list-inline-item"><a href="/privacy-policy">Privacy Policy</a></li>
                        <li class="list-inline-item"><a href="/terms-of-use">Terms of Use</a></li>
                    </ul>
                    <p class="copyright">Company Name © 2018</p>
                </footer>
            </div>
        </div >

    );
};

export default Footer;