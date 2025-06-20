const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-intro'>
                <div className='about-intro-text'>
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm Ian Kiprotich, a passionate web developer currently pursuing my studies in Information and Communication Technology. 
                        I have a strong foundation in modern web technologies and enjoy creating responsive, user-friendly applications.
                    </p>
                    <p>
                        My journey in web development started with a curiosity about how websites work, and it has evolved into a passion for 
                        building digital solutions that make a difference. I'm constantly learning and exploring new technologies to stay 
                        current in this ever-evolving field.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on 
                        personal projects that challenge my skills and creativity.
                    </p>
                </div>
                <div className='about-intro-image'>
                    <img src={require('../assets/Detective.png')} alt="Ian Kiprotich" />
                </div>
            </div>
        </div>
    )
}

export default About;