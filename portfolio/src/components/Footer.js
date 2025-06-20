import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: ikiprotichian@gmail.com</p>
                <p className="footer-contact-access">Mobile: +254 728925915</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://github.com/IKiprotich" target="_blank" rel="noopener noreferrer">
                        <i><FaGithub /></i>
                    </a>
                    <a href="https://www.linkedin.com/in/iankiprotichh/" target="_blank" rel="noopener noreferrer">
                        <i><FaLinkedin /></i>
                    </a>
                    <a href="https://x.com/ctrliann" target="_blank" rel="noopener noreferrer">
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