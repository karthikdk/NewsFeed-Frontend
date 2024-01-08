const initialRegisterToggle = false

const registerToggleReducer = (state = initialRegisterToggle, action) => {
    switch(action.type){
        case 'REGISTER_TOGGLE' : {
            return !state
        }
        default : {
            return state
        }
    }
}

export default registerToggleReducer