import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import {Header} from '../components/Header';
import {Button} from 'react-bootstrap';
import {customers, employees} from '../data';

const Customers = () => {


    const [addProject, setAddProject] = useState(false);


    const customerData = () => {
        return customers.map((customer, index) => (
            <tr key={index}>
                <td className="text-left">{customer.name}</td>
            </tr>
        ));
    };


    return (
        <div>
            <div className="text-left mt-5">
                <Button variant="primary" className="mt-4" onClick={() => setAddProject(!addProject)}>Add
                    customers</Button>{' '}
            </div>
            <Table striped bordered hover className="mt-5">
                <thead>
                <tr>
                    <th className="text-left">Name</th>
                </tr>
                </thead>
                <tbody>
                {customerData()}
                </tbody>
            </Table>
        </div>
    );
};

export default Customers;