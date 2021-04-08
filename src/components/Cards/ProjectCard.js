import React, { useState, useEffect } from "react";
import axios from "axios";
import Firstleft from "../Heros/Firstleft";
import Zoom from 'react-reveal/Zoom';
const ProjectCard = () => {
    const [projects, setprojects] = useState([]);
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/Captain-K-101/testrepo/main/Projects/index.js")
      .then(function (res) {
          setprojects(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

    return (
        <>
        
            {
            projects.map((i,j)=>(
                <Zoom>
                <Firstleft data={i} isleft={j%2}/>
                </Zoom>
            ))
            }
        </>
    )
}

export default ProjectCard
