import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {employees, projects} from '../../data';
import {customers} from '../../data';
import Table from 'react-bootstrap/Table';


export const AddProject = (props) => {


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
        props.handleClose();

    };

    const employeeData = () => {
        return employees.map((employee, index) => (
            <option key={index}>{employee.name}</option>
        ));
    };
    const customerData = () => {
        return customers.map((customer, index) => (
            <option key={index}>{customer.name}</option>
        ));
    };


    return (
        <Card className="mt-2">
            <Card.Body>
                <Row>
                    <Col md="6">
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
                                <Form.Control as="select" value={projectType}
                                              onChange={(e) => setProjectCustomer(e.target.value)}>
                                    {customerData()}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="assignEmployees">
                                <Form.Label>Assign employees</Form.Label>
                                <Form.Control as="select" value={projectType}
                                              onChange={(e) => setProjectEmployees(e.target.value)}>
                                    {employeeData()}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export const EditProject = (props) => {

    const employeeData = () => {
        return employees.map((employee, index) => (
            <option key={index}>{employee.name}</option>
        ));
    };
    const customerData = () => {
        return customers.map((customer, index) => (
            <option key={index}>{customer.name}</option>
        ));
    };

    const [projectType, setProjectType] = useState(props.type);
    const [projectCustomer, setProjectCustomer] = useState(props.customer);
    const [projectEmployees, setProjectEmployees] = useState(props.employees);
    const [projectActive] = useState(props.active);

    const handleSubmit = () => {
        projects.push({
            type: projectType,
            customer: projectCustomer,
            employees: projectEmployees,
            active: projectActive,
        });
        props.handleClose();

    };

    return (
        <Card className="mt-2">
            <Card.Body>
                <Row>
                    <Col md="6">
                        <Form className="text-left">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Project type</Form.Label>
                                <Form.Control as="select" value={props.type}
                                              onChange={(e) => setProjectType(e.target.value)}>
                                    <option>Konsulentbistand - Utvikling</option>
                                    <option>Konsulentbistand - Systemutvikling</option>
                                    <option>Konsulentbistand - Data science</option>
                                    <option>Konsulentbistand - ERP</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="customer">
                                <Form.Label>Customer</Form.Label>
                                <Form.Control as="select" value={props.customer}
                                              onChange={(e) => setProjectCustomer(e.target.value)}>
                                    {customerData()}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="assignEmployees">
                                <Form.Label>Assign employees</Form.Label>
                                <Form.Control as="select" value={props.employees}
                                              onChange={(e) => setProjectEmployees(e.target.value)}>
                                    {employeeData()}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export const ProjectGrid = () => {
    const projectData = () => {
        return projects.map((project, index) => (
            <Col md={4} className="mt-4">
                <Card className="text-left">
                    {/*<Card.Img variant="top" src="placeholder-image.png" />*/}
                    <Card.Body>
                        <Card.Title>{project.customer}</Card.Title>
                        <Card.Text>
                            Type: {project.type}
                        </Card.Text>
                        <Card.Text>
                            Consultants: {project.employees}
                        </Card.Text>
                        <Button variant="primary" onClick={() => EditProject(project)}>Edit project</Button>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };
    return (
        <Row>
            {projectData()}
        </Row>

    );
};

export const ProjectTable = () => {
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
        <Table striped bordered hover className="mt-2">
            <thead>
            <tr>
                <th className="text-left">Type</th>
                <th className="text-left">Customer</th>
                <th className="text-left">Employees</th>
                <th className="text-left">Status</th>
            </tr>
            </thead>
            <tbody>
            {projectData()}
            </tbody>
        </Table>
    );
};
