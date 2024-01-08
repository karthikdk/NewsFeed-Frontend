import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { setSource } from '../actions/sourceActions'
import { setCategory } from '../actions/categoryActions'



const UserSelection = () => {
    const categories = ['latest', 'india', 'technology', 'cricket']
    const dispatch = useDispatch()

    const category = useSelector((state)=>{
        return state.category
    })
    const source = useSelector((state)=>{
        return state.source
    })
   
    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'source'){
            dispatch(setSource(e.target.value))
        } else if(name === 'category'){
            dispatch(setCategory(e.target.value))
        }
    }
  return (
    <div className="mt-3 mb-4">
    <h2 className="text-center">You are reading the {category.charAt(0).toUpperCase() + category.slice(1)} articles from {source}</h2>
        <div className="d-flex justify-content-between mt-3">
        <form className="d-flex justify-content-start">
            <div className="form-group  me-5">
                <label>Change the Source of Articles</label>
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
                <label>Change the Category</label>
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
       </div>
</div>
  )
}

export default UserSelection
