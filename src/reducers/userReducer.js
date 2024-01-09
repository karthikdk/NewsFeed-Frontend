const initialvalue={}

const userReducer=(state=initialvalue,action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {
                ...action.payload
            }
        }
        case 'LOGOUT_USER':{
            return {}
        }
        default:{
            return{...state}
        }
    }
}
export default userReducer