import {customers} from "../../data";
import Table from "react-bootstrap/Table";
import React from "react";

export const CustomerTable = () => {
    const customerData = () => {
        return customers.map((project, index) => (
            <tr className="text-left" key={index}>
                <td>{project.name}</td>
            </tr>
        ));
    };

    return (
        <Table striped bordered hover className="mt-2">
            <thead>
            <tr>
                <th className="text-left">Name</th>
            </tr>
            </thead>
            <tbody>
            {customerData()}
            </tbody>
        </Table>
    );
};