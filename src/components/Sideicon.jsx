
        import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Side.css'; 

const SocialIcons = () => {
    return (
        <div className="social-fixed">
            <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
            </a>
            <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </a>
            <a href="https://youtube.com" className="social-icon youtube" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
                <span>YouTube</span>
            </a>
            <a href="https://x.com" className="social-icon x" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x"></i>
                <span>X</span>
            </a>
        </div>
    );
};

export default SocialIcons;


