const initialCategoryValue = 'latest'

const categoryReducer = (state = initialCategoryValue, action) => {
    switch(action.type){
        case 'SET_CATEGORY' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default categoryReducer