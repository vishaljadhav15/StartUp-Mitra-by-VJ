import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        (windowScroll > heightToHidden) ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    });

    return (
        <>
            <section className="container">
                <footer className="footer">
                    {/* Contact Info */}
                    <div className="footer-contact" >
                        <p><strong>Phone:</strong> +91 8208545082</p>
                        <p><strong>Email:</strong> vishaljadhav.gd@gmail.com</p>
                    </div>

                    {/* Centered Paragraph */}
                    <div className="footer-center">
                        <p>© All Right Reserved 2024 Designed By <a href="/"><b>Vishal Jadhav</b></a></p>
                    </div>

                    {/* Footer Navigation */}
                    <nav className="footer-nav">
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </footer>
            </section>

            {/* Scroll To Top */}
            {
                isVisible && (
                    <div className="scroll_top" onClick={scrollToTop}>
                        {faArrowUpIcon}
                    </div>
                )
            }
        </>
    );
}
