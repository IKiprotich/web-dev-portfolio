import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: iankiprotich@example.com</p>
                <p className="footer-contact-access">Mobile: +254 700 000 000</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://github.com/iankiprotich" target="_blank" rel="noopener noreferrer">
                        <i><FaGithub /></i>
                    </a>
                    <a href="https://linkedin.com/in/iankiprotich" target="_blank" rel="noopener noreferrer">
                        <i><FaLinkedin /></i>
                    </a>
                    <a href="https://twitter.com/iankiprotich" target="_blank" rel="noopener noreferrer">
                        <i><FaTwitter /></i>
                    </a>
                    <a href="https://instagram.com/iankiprotich" target="_blank" rel="noopener noreferrer">
                        <i><FaInstagram /></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;