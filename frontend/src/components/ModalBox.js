import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import { useGlobalContext } from '../contexts/context'

const ModalBox = () => {
    const {closeModal, isModalOpen} = useGlobalContext()
  return (
    <>
    <Modal.Dialog className = {isModalOpen ? null : `d-none`}>
        <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Modal is open using cotnexts.</p>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick = {closeModal} variant="secondary">Close</Button>
            
        </Modal.Footer>
    </Modal.Dialog>
    </>
  )
}

export default ModalBox