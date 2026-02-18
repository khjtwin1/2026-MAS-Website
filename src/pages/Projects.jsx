import ProjectsBanner from '../components/ProjectsBanner';
import ProjectsBox from '../components/ProjectsBox';
import '../styles/Projects.css'
import projectsList from "../../data/projectsList";
import { useState } from 'react';


function Projects() {

  const [selectedType, setSelectedType] = useState("ALL");

  const filteredProjects = selectedType === "ALL" ? projectsList : projectsList.filter(project => project.type === selectedType);


  return (
    <>
    {/* header */}

      <ProjectsBanner/>

      <div className='list'>
        {
          ["ALL", "WEB", "APP"].map(item => (
            <button key={item} className={`${selectedType === item ? "selected" : "notSelect"}`} onClick={() => setSelectedType(item)}>{item}</button>
          ))
        }
      </div>

      
      <div className='allProjects'>
        {
          filteredProjects.map(item => (
            <ProjectsBox 
            key={item.title}
            image={item.image}
            type={item.type}
            year={item.year}
            title={item.title}
            subTitle={item.subTitle}
            />
          ))
        }
      </div>
      
    {/* footer */}
    </>
  );
}

export default Projects;