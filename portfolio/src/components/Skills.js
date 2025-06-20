import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker, FaNode, FaPython, FaDatabase } from "react-icons/fa";
import { SiSwift, SiSwiftui, SiDjango, SiPostgresql } from "react-icons/si";

const Skills = () => {
    const skillsArr = [
        {
            "name" : 'SwiftUI',
            "icon" : SiSwiftui
        },
        {
            "name" : "React",
            "icon" : FaReact
        },
        {
            "name" : "Python",
            "icon" : FaPython
        },
        {
            "name" : "Django",
            "icon" : SiDjango
        },
        {
            "name" : "Swift",
            "icon" : SiSwift
        },
        {
            "name" : "PostgreSQL",
            "icon" : SiPostgresql
        },
        {
            "name" : "JavaScript",
            "icon" : FaJs
        },
        {
            "name" : "HTML",
            "icon" : FaHtml5
        },
        {
            "name" : "CSS",
            "icon" : FaCss3
        },
        {
            "name" : "Node.js",
            "icon" : FaNode
        },
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "Docker",
            "icon" : FaDocker
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p className="skill">
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;