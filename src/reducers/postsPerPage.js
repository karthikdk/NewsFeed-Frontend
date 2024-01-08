const initialPostsPerPage = 5

const postsPerPageReducer = (state = initialPostsPerPage, action) => {
    switch(action.type){
        case 'SET_POSTS_PER_PAGE' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default postsPerPageReducer