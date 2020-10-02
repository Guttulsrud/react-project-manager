import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../views/Home';
import {Projects} from '../views/Projects';
import Customers from '../views/Customers';
import Container from 'react-bootstrap/Container';
import Employees from '../views/Employees';

export const Navigation = () => (
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Project Manager 2020</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem eventkey={1} href="/">
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                    </NavItem>
                    <NavItem eventkey={1} href="/">
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </NavItem>
                    <NavItem eventkey={1} href="/">
                        <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                    </NavItem>
                    <NavItem eventkey={1} href="/">
                        <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Container>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/employees" component={Employees}/>
            </Switch>
        </Container>
    </>
);


export default Navigation;

