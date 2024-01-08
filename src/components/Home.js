import React from 'react'
import ModalComponet from './Modal'
import UserSelection from './userSelection'

const Home = (props) => {
  return (
    <div className='container'>
      <ModalComponet/>
      <UserSelection/>
    </div>
  )
}

export default Home