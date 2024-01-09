import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNo } from '../actions/pageNumberActions'
import { Pagination } from 'react-bootstrap'

const PaginationComponent = (props) => {
    const dispatch = useDispatch()

    const pageNo = useSelector((state)=> {
        return state.pageNo
    })
    let items = []
    for (let i = 1; i <= 10; i++) {
        items.push(
            <Pagination.Item 
                key={i} 
                active={i === pageNo} 
                onClick={()=>{dispatch(setPageNo(i))}}
            >
                {i}
            </Pagination.Item>
        )
    }
  return (
    <div className="mt-4 d-flex justify-content-center">
        <Pagination>{items}</Pagination>
    </div>
  )
}

export default PaginationComponent
