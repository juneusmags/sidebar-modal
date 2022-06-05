import React, {useContext} from 'react'
import { useState } from 'react'


const AppContext = React.createContext()

const AppProvider = ({children}) => {

    
const [isModalOpen, setIsModalOpen] = useState(false)
const [isSideBarOpen, setIsSideBarOpen] = useState(false)

const toggleModal = () => {
    setIsModalOpen(true)
}

const closeModal = () => {
    setIsModalOpen(false)
}

const toggleSideBar = () => {
    setIsSideBarOpen(true)
}

const closeSideBar = () => {
    setIsSideBarOpen(false)
}
    return <AppContext.Provider value = {
        {isModalOpen, isSideBarOpen, toggleModal, closeModal, toggleSideBar, closeSideBar}
    }>{children}</AppContext.Provider>
}

//GLOBAL CONTEXT

export const useGlobalContext = () => {
    return useContext(AppContext)
     
}

export {AppContext, AppProvider}