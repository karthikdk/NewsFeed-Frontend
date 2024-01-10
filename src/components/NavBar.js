import React, { useEffect } from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'
import {FaUser} from 'react-icons/fa6'
import { GiNewspaper } from "react-icons/gi";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../actions/loginAction'
import { isLogged } from '../actions/loggedAction'
import { logoutUser, startGetUser } from '../actions/userActions'

const NavBar = (props) => {
    const dispatch=useDispatch()

    const isLoggedIn = useSelector((state)=>{
        return state.isLogged
    })
    const user = useSelector((state)=> {
        return state.user
    })
    useEffect(()=>{
        if(isLoggedIn){
            dispatch(startGetUser())
        }
    }, [isLoggedIn, dispatch])

    const handleLogoutClick = () => {
        localStorage.removeItem('token')
        dispatch(isLogged())
        dispatch(logoutUser())
        if(handleLogoutClick){
            const confirm=window.confirm('Are you Sure You Want to Logout..!!')
            if(confirm){
                alert('logout Success')
            }else{
                dispatch(logoutUser)
            }
        }
    }

  return (
    <div className='sticky-top'>
    <Navbar 
        bg="dark" 
        variant="dark"

    >
        <Container>
        <Navbar.Brand as={Link} to="/"><GiNewspaper style={{width:'40px',height:'50px'}} /><span className='badge bg-light text-dark fs-5'>News APP</span></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {isLoggedIn ? (
                        <React.Fragment>   
                            <Button variant="danger" onClick={handleLogoutClick}><FaUser style={{width:'20px',height:'30px'}}/>  Logout</Button>
                            <Navbar.Text style={{marginRight : '20px',}} className='text-light py-2 px-2'>
                                        user:  {user.name}
                                        <br/>
                                        email: {user.email}
                            </Navbar.Text>
                         </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Button variant="info" onClick={()=>{
                                    dispatch(loginAction())
                                }} ><FaUser style={{width:'20px',height:'30px'}}/>  LogIn</Button>
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
