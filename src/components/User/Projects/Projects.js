import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";
import { domainName } from "../../../apis/serverApi";
import './Projects.scss';

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="heading">Projects</h2>

        <div className="project-items">
          {console.log(`projects`, projects)}
          {projects.map((proj, i) => {
            return(
              <div
                key={proj._id}
                className="project"
              >
                <div className="img-section">
                  <ModalImage
                    small={ proj.projectImage[0].secure_url}
                    large={proj.projectImage[0].secure_url}
                    alt={proj.title}
                  />
                  {/* <img style={{width : "100px"}} src={proj.projectImage[0].secure_url} alt="" /> */}
                </div>
                <div className="text-section">
                  <h4 className="title">{proj.title}</h4>
                  <p className="grey-text">{proj.description}</p>
                  <p
                    className="keywords"
                    style={{
                      display: "inline",
                    }}
                  >
                    keywords:
                  </p>
                  <p className="keywordsname"> {proj.technologies}</p>
                  {proj.haveLink && (
                    <a
                      className=""
                      target="_blank"
                      rel="noreferrer"
                      href={proj.link}
                    >
                      <p className="viewSource">Source code</p> 
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
