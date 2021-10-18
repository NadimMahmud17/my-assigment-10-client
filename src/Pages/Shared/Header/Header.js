import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand  to="/">Doctors</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link  to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link  to="/login">LogIn</Link>
                        {/* {user?.email ?
                            <Button onClick={} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>} */}
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;