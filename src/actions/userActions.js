import axios from 'axios'

export const userLogin =  (formData, clearAndDispatch) => {
    return (
        async () => {
            try {
                const { data } = await axios.post('http://localhost:3060/api/users/login',formData)
                if(data.hasOwnProperty('notice')){
                     alert(data.message,'info')
                } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                    alert(data.message,'info')
                } else if(data.hasOwnProperty('token')){
                    alert('Login Successful', 'success')
                    localStorage.setItem('token',data.token)
                    clearAndDispatch()
                }
            } catch (error) {
                normalAlert(error.message, 'error')
            }
        }
    )
}

export const userRegistration=(formData,clearAndDispatch)=>{
    return(
        async()=>{
            try {
                const {data}=await axios.post('http://localhost:3060/api/users/register',formData)
                if(data.hasOwnProperty('errors')){
                    alert(data.message,'info')
                }else{
                    alert(data.success,'successfully Registered With Us')
                    clearAndDispatch()
                }
            } catch (error) {
                alert(error.message,'error')
            }
        }
    )
}