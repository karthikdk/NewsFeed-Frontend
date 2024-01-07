import React from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../actions/loginAction'
import { isLogged } from '../actions/loggedAction'


const NavBar = (props) => {
    const dispatch=useDispatch()

    const isLogged = useSelector((state)=>{
        return state.isLogged
    })

    

  return (
    <div>
    <Navbar 
        bg="dark" 
        variant="dark"
    >
        <Container>
        <Navbar.Brand as={Link} to="/"><span className='badge bg-light text-dark fs-4'>News App</span></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {isLogged ? (
                        <React.Fragment>
                                <Navbar.Text>
                                    Signed in as: Mark Otto
                                </Navbar.Text>
                                <Button variant="dark">Logout</Button>
                         </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Navbar.Text>
                                    Welcome User
                                </Navbar.Text>
                                <Button variant="dark">LogIn</Button>
                            </React.Fragment>
                        )
                    }
        </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
  )
}

export default NavBar
