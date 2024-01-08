const initialSourceValue = <span className='badge bg-danger text-light fs-10' style={{borderRadius:'20px',height:'40px',width:'150px'}}><h6>Times Of India</h6></span>

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