import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {AddEmployee} from '../components/Employee/Employee';
import {employees} from '../data';

const Employees = () => {

    const [addEmployee, setAddEmployee] = useState(false)

    const employeeData = () => {
        return employees.map((employee, index) => (
            <tr key={index}>
                <td className="text-left">{employee.name}</td>
            </tr>)
        )
    }

    return (
        <div>
            <div className="text-left mt-5">
                <Button variant="primary" className="mt-4" onClick={() => setAddEmployee(!addEmployee)}>Add employee</Button>{' '}
            </div>
            {!addEmployee &&

            <Table striped bordered hover className="mt-5">
                <thead>
                <tr>
                    <th className="text-left">Name</th>
                </tr>
                </thead>
                <tbody>
                {employeeData()}
                </tbody>
            </Table>
            }
            {addEmployee && <AddEmployee/>}

        </div>
    );
};

export default Employees;