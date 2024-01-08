import axios from 'axios'

export const startGetArticles = (source, category, pageNo, posts) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3060/api/articles/list/?source=${source}&category=${category}&page=${pageNo}&posts=${posts}`)
            dispatch(setArticles(data))
        } catch (error) {
            alert(error, 'error')
        }
    }
}
export const setArticles = (articles) => {
    return {
        type : 'SET_ARTICLES',
        payload : articles
    }
}
export default startGetArticles
