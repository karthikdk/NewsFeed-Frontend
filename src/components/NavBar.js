import React, { useEffect } from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../actions/loginAction'
import { isLogged } from '../actions/loggedAction'
import { logoutUser, startGetUser } from '../actions/userActions'

const NavBar = (props) => {
    const dispatch=useDispatch()

    const isLoggedIn = useSelector((state)=>{
        return state.isLoggedIn
    })

    const user = useSelector((state)=> {
        return state.user
    })

    useEffect(()=>{
        if(isLogged){
            dispatch(startGetUser())
        }
    }, [isLoggedIn, dispatch])

    const handleLogoutClick = () => {
        const logoutAndDispatch = () => {
            localStorage.removeItem('token')
            dispatch(isLogged())
            dispatch(logoutUser())
        }
        if(logoutAndDispatch){
            alert('logout success')
        }
    }

  return (
    <div>
    <Navbar 
        bg="dark" 
        variant="dark"
    >
        <Container>
        <Navbar.Brand as={Link} to="/"><span className='badge bg-light text-dark fs-4'>News App</span></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {isLoggedIn ? (
                        <React.Fragment>
                                <Navbar.Text>
                                    Signed in as: {user.name}
                                </Navbar.Text>
                                <Button variant="dark" onClick={handleLogoutClick}>Logout</Button>
                         </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Navbar.Text>
                                    Welcome User
                                </Navbar.Text>
                                <Button variant="dark" onClick={()=>{
                                    dispatch(loginAction())
                                }} >LogIn</Button>
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
