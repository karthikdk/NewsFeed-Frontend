const initialLoginToggle = false

const loginToggleReducer = (state = initialLoginToggle, action) => {
    switch(action.type){
        case 'LOGIN_TOGGLE' : {
            return !state
        }
        default : {
            return state
        }
    }
}

export default loginToggleReducer