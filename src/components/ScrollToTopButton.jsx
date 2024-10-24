import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-14 right-3 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <button
                onClick={scrollToTop}
                className="bg-slate-300 text-white rounded-full p-2 shadow-lg hover:bg-green-700 transition-colors"
                style={{ display: visible ? 'flex' : 'none' }}
                aria-label="Scroll to top"
            >
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
