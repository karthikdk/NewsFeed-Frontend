import axios from 'axios'

export const userLogin =  (formData, resetAndDispatch) => {
    return (
        async () => {
            try {
                const { data } = await axios.post('http://localhost:3060/api/users/login',formData)
                if(data.hasOwnProperty('notice')){
                    alert(data.notice, 'error')
                } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                    alert(data.message, 'error')
                } else if(data.hasOwnProperty('token')){
                    alert('Login Successful', 'success')
                    localStorage.setItem('token',data.token)
                    resetAndDispatch()
                }
            } catch (error) {
                alert(error.message, 'error')
            }
        }
    )
}

export const userRegistraion = (formData, resetAndDispatch) => {
    return (
        async () => {
            try {
                const { data } = await axios.post('http://localhost:3060/api/users/register',formData)
                if(data.hasOwnProperty('errors')){
                    alert(data.message, 'info')
                } else {
                    alert('Succssfully Registered With Us')
                    resetAndDispatch()
                }
            } catch (error) {
                alert(error.message, 'error')
            }
        }
    )
}

export const startGetUser = () => {
    return (
        async (dispatch) => {
            try {
                const {data} = await axios.get('http://localhost:3060/api/users/account',{
                    headers : {
                        authorization : localStorage.getItem('token')
                    }
                })
                dispatch(setUser(data))
            } catch (error) {
                alert(error.message, 'error')
            }
        }
    )
}

export const setUser = (user) => {
    return {
        type : 'SET_USER',
        payload : user
    }
}

export const logoutUser = () => {
    return {
        type : 'LOGOUT_USER'
    }
}
