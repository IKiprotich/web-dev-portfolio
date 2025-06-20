import { FaGithub, FaLinkedin } from "react-icons/fa";

const Body = () => {
    return (
        <div id='body' className='body'>
            <div className='body-intro'>
                <div className='body-intro-text'>
                    <h1>Ian Kiprotich</h1>
                    <h2>Web Developer</h2>
                    <p>Passionate about creating beautiful and functional web applications</p>
                    <div className='body-intro-text-buttons'>
                        <a href="https://github.com/IKiprotich" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/iankiprotichh/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className='body-intro-image'>
                    <img src={require('../assets/software.png')} alt="Ian Kiprotich" />
                </div>
            </div>
        </div>
    )
}

export default Body;