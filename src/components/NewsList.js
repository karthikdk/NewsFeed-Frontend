import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import startGetArticles from '../actions/newsArticleActions'
import NewsArticle from './NewsArticle'

const NewsList = (props) => {
    const dispatch = useDispatch()
    const {source, category, pageNo, postsPerPage, articles} = useSelector((state)=>{
        return state
    })
    useEffect(()=>{
        dispatch(startGetArticles(source, category, pageNo, postsPerPage))
    },[source, category, pageNo, postsPerPage, dispatch])
  return (
    <div>
         {articles.length  ? (
                    <div>
                        {articles.map(article => {
                            return <NewsArticle
                                key={article._id}
                                {...article}
                            />
                        })}
                    </div>
                ) : (
                    <div style={{height : '45vh', textAlign : 'center', marginTop : '200px'}}>
                        <h2>Nothing to show here.</h2>
                        <h2>Go Back.</h2>
                    </div>
                )
            }
    </div>
  )
}

export default NewsList
