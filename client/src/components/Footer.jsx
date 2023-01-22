import React from 'react';
import styles from '../style.css'

const Footer = () => {
    return (
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
    );
};

export default Footer;