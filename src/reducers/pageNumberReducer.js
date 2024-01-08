const initialPageNo = 1

const pageNoReducer = (state = initialPageNo, action) => {
    switch(action.type){
        case 'SET_PAGE_NO' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default pageNoReducer