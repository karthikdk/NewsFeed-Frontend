const initialSourceValue ='Times Of India'

const sourceReducer = (state = initialSourceValue, action) => {
    switch(action.type){
        case 'SET_SOURCE' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default sourceReducer