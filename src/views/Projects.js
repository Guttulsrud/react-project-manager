import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import {AddProject, EditProject, ProjectGrid, ProjectTable} from '../components/Project/Project';
import {employees, projects} from '../data';

const Projects = () => {


    const [addProject, setAddProject] = useState(false);


    const projectData = () => {
        return projects.map((project, index) => (
            <tr className="text-left" key={index}>
                <td>{project.type}</td>
                <td>{project.customer}</td>
                <td>{project.employees}</td>
                <td>{project.active ? 'Active' : 'Not active'}</td>
            </tr>
        ));
    };

    return (
        <div>
            <div className="text-left mt-5">
                <h3>{
                    !addProject ? 'Projects' : 'Add new project'
                }</h3>
                <Button variant="primary" className="mt-4" onClick={() => setAddProject(!addProject)}>{
                    !addProject ? 'Add project' : 'Back'
                }</Button>
            </div>
            {!addProject && <ProjectGrid className="mt-4"/>}
            {/*{!addProject && <ProjectTable/>}*/}

            {addProject && <AddProject handleClose={() => setAddProject(!addProject)}/>}
        </div>
    );
};

export default Projects;