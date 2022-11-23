import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddCompanyBtn(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [compname, setCompname] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [comptype, setComptype] = useState('');

	const changeCompname = (event) => {
		setCompname(event.target.value);
	};

	const changeEmail = (event) => {
		setEmail(event.target.value);
	};
	const changeAddress = (event) => {
		setAddress(event.target.value);
	}; const changePhone = (event) => {
		setPhone(event.target.value);
	}; const changeComptype = (event) => {
		setComptype(event.target.value);
	};
	const transferValue = (event) => {
		event.preventDefault();
		const val = {
			compname,
			email,
			address,
			phone,
			comptype
		};
		props.func(val);
		clearState();

	};
	const clearState = () => {
		setCompname('');
		setEmail('');
		setAddress('');
		setPhone('');
		setComptype('');
	};
	return (
		<>
			<Button variant="outline-info" onClick={handleShow}>
				Add Company
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Company Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label>Name</label>
					<input type="text" value={compname} onChange={changeCompname} /><br /><br /><br />


					<label>email</label>
					<input type="text" value={email} onChange={changeEmail} /><br /><br /><br />

					<label>address</label>
					<input type="text" value={address} onChange={changeAddress} /><br /><br /><br />

					<label>phone</label>
					<input type="text" value={phone} onChange={changePhone} /><br /><br /><br />

					<label>type</label>
					<input type="text" value={comptype} onChange={changeComptype} /><br /><br /><br />

				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={transferValue}>
					{props.name}
					</Button>
				</Modal.Footer>
			</Modal>
			</>
	)
}
export default AddCompanyBtn;
