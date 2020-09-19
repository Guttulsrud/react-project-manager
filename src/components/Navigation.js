import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Customers from '../views/Customers';
import Container from 'react-bootstrap/Container';
import Employees from '../views/Employees';

export const Navigation = () => (
    <div>
        <div>
            <Navbar>
                <Navbar.Brand as={Link} to="/projects">Project Manager 2020</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
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
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <Container>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/employees" component={Employees}/>
            </Switch>
        </Container>
    </div>
);


export default Navigation;

