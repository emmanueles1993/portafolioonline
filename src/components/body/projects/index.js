import React from "react";
import Separator from "../../common/separator";
import { projectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
function projects() {
  const data = projectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">proyectos</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default projects;
