import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setSource } from '../actions/sourceActions'
import { setCategory } from '../actions/categoryActions'
import { setPageNo } from '../actions/pageNumberActions'
import { setPostsPerPage } from '../actions/postsPerpageActions'

const UserSelection = (props) => {
    const categories = ['latest', 'india', 'technology', 'cricket']
    const dispatch = useDispatch()

    const category = useSelector((state)=>{
        return state.category
    })
    const source = useSelector((state)=>{
        return state.source
    })
    const postsPerPage = useSelector((state)=> {
        return state.postsPerPage
    })
   
    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'source'){
            dispatch(setSource(e.target.value))
            dispatch(setPageNo(1))
        } else if(name === 'category'){
            dispatch(setCategory(e.target.value))
            dispatch(setPageNo(1))
        }
    }
  return (
    <div className="mt-3 mb-4">
    <h2 className="text-center">{category.charAt(0).toUpperCase() + category.slice(1)} Articles From {source}</h2>
    <div className="d-flex justify-content-between mt-3">
        <form className="d-flex justify-content-end">
            <div className="form-group  me-5">
                <label>News Source</label>
                <select 
                    className="form-control"
                    value={source} 
                    onChange={handleChange}
                    name="source"
                >
                    <option value="TOI">Times of India</option>
                </select>
            </div>
            <div className="form-group">
                <label>Categories</label>
                <select 
                    className="form-control"
                    value={category}
                    onChange={handleChange}
                    name="category"
                >
                    {categories.map((cat , i) => {
                        return <option
                            key={i}
                            value={cat}
                        >{cat.charAt(0).toUpperCase()+cat.slice(1)}</option>
                    })}
                </select>
            </div>
        </form>
        <form>
            <label>Articles per page</label>
            <select 
                className="form-control"
                value={postsPerPage} 
                onChange={(e)=>dispatch(setPostsPerPage(e.target.value))}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </form>
    </div>
</div>
  )
}

export default UserSelection
