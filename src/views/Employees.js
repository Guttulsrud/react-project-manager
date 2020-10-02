import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {EmployeeTable} from '../components/Employee/Employee';
import {employees} from '../data';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Employees = () => {

    const [show, setShow] = useState(false);
    const [employee, setEmployee] = useState(employees[0].name)

    const handleSubmit = () => {
        employees.push({
            name: employee,
        });
        handleClose();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="text-left">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter name"
                                          onChange={(e) => setEmployee(e.target.value)}/>
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
                <h2>Employee</h2>
                <Button className="mt-4" onClick={handleShow}>Add employee</Button>
            </div>
            <EmployeeTable/>
        </div>
    );
};

export default Employees;