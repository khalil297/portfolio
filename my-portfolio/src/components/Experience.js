import React from 'react';
import '../App.css'; // Ensure this is correct based on your file structure
import powerBI from '../images/power-bi.png';
import powerAutomate from '../images/power-automate.png';
import powerApps from '../images/power-apps.png';
import azureDevOpsIcon from '../images/azure-devops.png';
import pythonIcon from '../images/python.png';
import awsIcon from '../images/aws.png'; 
import dockerIcon from '../images/docker.png';
import giticon from '../images/git.png';

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <div className="experience-grid">
        <div className="experience-item">
          <div>
            <strong>Software Engineer – Apprentice</strong> at AXA – Investment Managers, Paris, France (10/2023 - Present)
          </div>
          <ul>
            <li>Participated in the implementation of a centralized reporting solution for AXA IM Select (Finance, Risk, Procurement).</li>
            <li>Transformed advanced data, integrated automated data flows, and created dynamic visualizations with Power BI.</li>
            <li>Integrated Power Automate to automate workflows, simplifying recurring tasks and optimizing processes.</li>
            <li>Implemented Python scripts to automate data manipulation previously done manually by business analysts.</li>
          </ul>
          <div className="tech-icons tech-icons-first">
            <img src={powerBI} alt="Power BI" className="tech-icon" />
            <img src={powerAutomate} alt="Power Automate" className="tech-icon" />
            <img src={powerApps} alt="Power Apps" className="tech-icon" />
            <img src={azureDevOpsIcon} alt="Azure DevOps" className="tech-icon" />
            <img src={pythonIcon} alt="Python" className="tech-icon" />
          </div>
        </div>
        <div className="experience-item">
          <div>
            <strong>Trading Operations Analyst</strong> at CrypPro Ltd, London, United Kingdom (remote) (01/2023 - 03/2023)
          </div>
          <ul>
            <li>Developed Python scripts to retrieve data from AWS.</li>
            <li>Preprocessed large datasets for subsequent analysis.</li>
            <li>Automated workflows using Docker to simplify processes and export data to Google Sheets and Slack.</li>
            <li>Developed a custom Slack bot to enhance team communication and collaboration, enabling targeted messaging and file sharing.</li>
          </ul>
          <div className="tech-icons tech-icons-second">
            <img src={awsIcon} alt="AWS" className="tech-icon" />
            <img src={dockerIcon} alt="Docker" className="tech-icon" />
            <img src={giticon} alt="Docker" className="tech-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
