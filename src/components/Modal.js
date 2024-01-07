import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import Login from './Login'
import Register from './Register'
import { loginAction } from '../actions/loginAction'
import { registerAction } from '../actions/registrationAction'



const ModalComponet = (props) => {
    const dispatch=useDispatch()

    const loginToggle=useSelector((state)=>{
        return state.loginToggle
    })

    const registerToggle = useSelector((state)=>{
        return state.registerToggle
    })

    const handleModal=()=>{
        if(loginToggle){
            dispatch(loginAction())
        }else{
            dispatch(registerAction())
        }
    }

  return (
    <div>
        <Modal 
            show={loginToggle||registerToggle}
            onHide={handleModal}
        >

         <Modal.Header closeButton>
                <Modal.Title>
                    {loginToggle ? 'Login to your Account' : registerToggle && 'Register with us'}
                </Modal.Title>  
         </Modal.Header>

         <Modal.Body>
         {loginToggle ? <Login/> : registerToggle && <Register/>}
         </Modal.Body>
        </Modal>
    </div>
  )
}

export default ModalComponet
