import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {ProjectTable} from '../components/Project/Project';
import {listOptions} from '../utils/Utils';
import {customers, employees, projects} from '../data';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Projects = () => {

    const [show, setShow] = useState(false);
    const [projectType, setProjectType] = useState('Konsulentbistand - Utvikling');
    const [projectCustomer, setProjectCustomer] = useState(customers[0].name);
    const [projectEmployees, setProjectEmployees] = useState(employees[0].name);


    const handleSubmit = () => {
        projects.push({
            type: projectType,
            customer: projectCustomer,
            employees: projectEmployees,
            active: true,
        });
        handleClose();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="text-left">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Project type</Form.Label>
                            <Form.Control as="select" value={projectType}
                                          onChange={(e) => setProjectType(e.target.value)}>
                                <option>Konsulentbistand - Utvikling</option>
                                <option>Konsulentbistand - Systemutvikling</option>
                                <option>Konsulentbistand - Data science</option>
                                <option>Konsulentbistand - ERP</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="customer">
                            <Form.Label>Customer</Form.Label>
                            <Form.Control as="select" value={projectCustomer}
                                          onChange={(e) => setProjectCustomer(e.target.value)}>
                                {listOptions(customers)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="assignEmployees">
                            <Form.Label>Assign employees</Form.Label>
                            <Form.Control as="select" value={projectEmployees}
                                          onChange={(e) => setProjectEmployees(e.target.value)}>
                                {listOptions(employees)}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="text-left mt-5">
                <h2>Projects</h2>
                <Button className="mt-4" onClick={handleShow}>Add project</Button>
            </div>
            <ProjectTable/>
        </>
    );
};

export default Projects;