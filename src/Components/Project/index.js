import React from "react";
import "./projects.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Utilizes:</strong> {props.utilizes}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.deployed}
            
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Project;
