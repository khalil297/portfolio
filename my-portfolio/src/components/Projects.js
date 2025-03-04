import React from 'react';
import '../App.css'; // Ensure this is correct based on your file structure
import nodejsIcon from '../images/nodejs.png';
import reactIcon from '../images/react.png';
import web3Icon from '../images/web3.png';
import mysqlIcon from '../images/mysql.png';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-item">
          <strong>E-Wallet and Point of Sale for Digital Assets</strong> (01/2022 - 05/2022)
          <ul>
            <li>Developed the application using React, Node.js, and MySQL.</li>
            <li>Implemented an Ethereum blockchain network using Hyperledger Besu.</li>
            <li>Integrated Web3 connectivity to interact with the blockchain.</li>
          </ul>
          <div className="tech-icons tech-icons-projects">
            <img src={nodejsIcon} alt="Node.js" className="tech-icon" />
            <img src={reactIcon} alt="React" className="tech-icon" />
            <img src={web3Icon} alt="Web3" className="tech-icon" />
            <img src={mysqlIcon} alt="MySQL" className="tech-icon" />
          </div>
        </div>
        <div className="project-item">
          <strong>Epilepsy Detector</strong> (02/2021 - 05/2021)
          <ul>
            <li>Implemented machine learning classification algorithms to detect and predict epileptic seizures using Python.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
