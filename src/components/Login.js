import React from 'react'
import isEmail from 'validator/lib/isEmail'
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const validationStyle = {color : 'red'}

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'email'){
            setEmail(e.target.value.trim())
        } else if(name === 'password'){
            setPassword(e.target.value.trim())
        }
    }
    
    const runValidations = () => {
        //email validations
        if(email.length === 0){
            errors.email = 'Email cannot be empty'
        } else if(!isEmail(email)){
            errors.email = 'Invalid Email Format'
        } else if(email.includes('!') || email.includes('*') || email.includes('$') || email.includes('%')){
            errors.email = 'Email cannot contain special characters'
        }

        //password validations
        if(password.trim().length === 0){
            errors.password = 'Password cannot be empty'
        }
    }

  return (
    <div>
        <form className='mt-3' onSubmit={handleSubmit}>
             <label>Enter Your Email</label> 
                    <br/>
                    <input
                        className="form-control" 
                        type="text" 
                        value={email} 
                        onChange={handleChange}
                        name="email"
                    />
                    {formErrors.email ? <p style={validationStyle}>{formErrors.email}</p> : <br/>}
                    
                    <label>Enter Your Password</label> 
                    <br/>
                    <input 
                        className="form-control"
                        type="password" 
                        value={password} 
                        onChange={handleChange}
                        name="password"
                    />
                    {formErrors.password ? <p style={validationStyle}>{formErrors.password}</p> : <br/>}
                    <input className="btn btn-primary" type='submit' value="Login" />
        </form>
        <p className='mt-2' style={{textAlign:'center'}}>Don't have an account?
        <button className='btn btn-outline-primary'>Register here!</button>
        </p>

    </div>
  )
}

export default Login
