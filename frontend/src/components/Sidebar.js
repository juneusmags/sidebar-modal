import React from 'react'
import { links, social } from '../data'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import { useGlobalContext } from '../contexts/context'
const Sidebar = () => {
    const {closeSideBar, isSideBarOpen} = useGlobalContext()
  return (
    <>
        <div>
        <ListGroup className= {isSideBarOpen ? null : `d-none`}>
            <div>
            {links.map((link)=>{
                const {id, url, text, icon} = link
                return (
                    <ListGroup.Item key = {id}><button className='btn'>{icon} {text}</button></ListGroup.Item>
                )
            })}
            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                {social.map((s)=>{
                    const {id, url, icon} = s
                    return(
                        <ListGroup.Item className = "btn" href = {url}>{icon}</ListGroup.Item>
                    )
                })}
            </div>
            <button className = "btn" onClick={closeSideBar}>Close</button>
        </ListGroup>
        </div>
    </>
  )
}

export default Sidebar