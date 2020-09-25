import React from 'react';
import {employees} from "../../data";
import Table from "react-bootstrap/Table";


export const EmployeeTable = () => {
    const employeeData = () => {
        return employees.map((employee, index) => (
            <tr className="text-left" key={index}>
                <td>{employee.name}</td>
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
            {employeeData()}
            </tbody>
        </Table>
    );
};
