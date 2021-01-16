import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div classname="col-mb-4"></div>
      <div className="img-container">
        <img className="portfolioImage" alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <p>{props.utilizes}</p>
        <a className="portfolioButton" href={props.deployed} target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-square-alt"></i>
          Deployed
        </a>
        <a className="portfolioButton" href={props.github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i>
         Github
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;