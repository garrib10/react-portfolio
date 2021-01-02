import React, { Component } from 'react';
import Project from '../Component/Project'
import Projects from "../projects.json";
import Wrapper from '../Component/Wrapper';



class Portfolio extends Component {

    state = {
        Projects
    };

render () {
return (
    
    <div>
    <div id="projects" className="page-header">Projects.</div>
    <Wrapper>
        {Projects.map(project => (
            <Project
                key={project.id}
                id={project.id}
                image={project.image}
                name={project.name}
                description={project.description}
                utilizes={project.utilizes}
                github={project.github}
                deployed={project.deployed}
            />
        ))}
    </Wrapper>
    </div>
  );
}
}

export default Portfolio;