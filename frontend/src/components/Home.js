import React from 'react'
import Button from 'react-bootstrap/Button'
import {useGlobalContext} from '../contexts/context.js'

const Home = () => {
    const {toggleModal,toggleSideBar} = useGlobalContext()
  return (
      <>
        <div>
            <Button onClick = {toggleSideBar}>
                SideBar
            </Button>
        </div>
        <div className = "d-flex justify-content-center align-items-center">
            <Button onClick = {toggleModal}>
                Modal
            </Button>
        </div>
    </>
  )
}

export default Home