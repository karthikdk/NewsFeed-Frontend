import React from 'react'
import ModalComponet from './Modal'
import UserSelection from './userSelection'
import NewsList from './NewsList'

const Home = (props) => {
  return (
    <div className='container'>
      <ModalComponet/>
      <UserSelection/>
      <NewsList/>
    </div>
  )
}

export default Home