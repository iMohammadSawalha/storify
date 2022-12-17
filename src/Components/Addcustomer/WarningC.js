import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillBackspaceFill } from "react-icons/bs";
import './ListStyle.css';
const WarningC = ({customerData,handleDeleteClick}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   <BsFillBackspaceFill  id='spacefill' onClick={handleShow}/>  
      <Modal
      show={show} 
      onHide={handleClose}
      centered
       animation={true}
       keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Think again...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Customer ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          <Button variant="danger"  onClick={() => handleDeleteClick(customerData.ind)}>Yes,sure </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WarningC