import React from 'react'
import ModalComponet from './Modal'
import UserSelection from './userSelection'
import NewsList from './NewsList'
import Pagination from './Pagination'

const Home = (props) => {
  return (
    <div className='container'>
      <ModalComponet/>
      <UserSelection/>
      <NewsList/>
      <Pagination/>
    </div>
  )
}

export default Home