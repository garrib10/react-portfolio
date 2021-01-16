import React, { Component } from 'react';
import Project from '../../Component/PortfolioCard'
import Projects from "../../projects.json";
import Wrapper from '../../Component/Wrapper';
import "./style.css"



class Portfolio extends Component {

    state = {
        Projects
    };

    render() {
        return (
            <div id="portfolioRoot">

                <main className="mainTop">
                    <div className="container-fluid">


                        <div className="row articleHeading" >
                            <div className="col-md-12">

                            </div>
                        </div>
                        <div>
                            <div id="portfolioRoot" className="page-header"></div>
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
                                <br></br>
                                <br></br>
                                <br></br>
                            </Wrapper>
                        </div>
                    </div>
                </main>
            </div>

        );
    }
}


export default Portfolio;



