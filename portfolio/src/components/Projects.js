import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsData from '../data/projects.json';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id='projects' className='projects'>
            <h1 className='heading'>Projects</h1>
            <div className='projects-container'>
                <Slider {...settings}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='project'>
                            <div className='content'>
                                <img src={require('../assets/login.png')} alt={project.name} />
                                <h3 className='name'>{project.name}</h3>
                                <p className='description-min'>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className='project-button'>View Project</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Projects;