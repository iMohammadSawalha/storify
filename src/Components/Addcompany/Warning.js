import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from "react-icons/fa";
const DeleteWarning=({ Data, handleDeleteClick }) =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <FaTimes id="deleteBtn" onClick={handleShow} />
            <Modal
                show={show}
                onHide={handleClose}
                centered
                animation={true}
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Think again...</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this compnay?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button variant="danger" onClick={() => handleDeleteClick(Data.id)}>Yes,sure </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteWarning;