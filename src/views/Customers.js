import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {customers, employees, projects} from '../data';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {CustomerTable} from "../components/Customer/Customer";

const Customers = () => {

    const [show, setShow] = useState(false);
    const [customer, setCustomer] = useState(customers[0].name);

    const handleSubmit = () => {
        customers.push({
            name: customer,
        });
        handleClose();
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="text-left">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter name"
                                          onChange={(e) => setCustomer(e.target.value)}/>
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
                <h2>Customers</h2>
                <Button className="mt-4" onClick={handleShow}>Add customer</Button>
            </div>
            <CustomerTable/>
        </>
);
};

export default Customers;