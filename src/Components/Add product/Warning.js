import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa";
import './List.css';

function  DeleteWarning({proData,handleDeleteClick}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   <FaTimes  onClick={handleShow} id="deleteBtn"/>  
      <Modal
      show={show} 
      onHide={handleClose}
       animation={false}
       keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Think again...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          <Button variant="danger"  onClick={() => handleDeleteClick(proData.id)}>Yes,sure </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteWarning;