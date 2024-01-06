import React from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
    <Navbar 
        bg="primary" 
        variant="dark"
        sticky="top"
    >
        <Container>
        <Navbar.Brand as={Link} to="/">News App</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: Mark Otto
            </Navbar.Text>
            <Button variant="dark">Logout</Button>
        </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
  )
}

export default NavBar
