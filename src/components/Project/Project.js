import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {projects} from '../../data';
import Table from 'react-bootstrap/Table';


export const ProjectGrid = () => {
    const projectData = () => {
        return projects.map((project, index) => (
            <Col md={4} className="mt-4">
                <Card className="text-left">
                    <Card.Img variant="top" src="placeholder-image.png" />
                    <Card.Body>
                        <Card.Title>{project.customer}</Card.Title>
                        <Card.Text>
                            Type: {project.type}
                        </Card.Text>
                        <Card.Text>
                            Consultants: {project.employees}
                        </Card.Text>
                        <Button variant="primary">Edit project</Button>
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
                <td>{project.customer}</td>
                <td>{project.type}</td>
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
