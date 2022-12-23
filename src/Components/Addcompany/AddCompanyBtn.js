import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './FormStyle.css';
function AddCompanyBtn(props) {
	const [error, setError] = useState(false);

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

		if (compname === "" || email === "" || phone === "" || address === "" || comptype === "")
			setError(true);

		else {
			const val = {
				compname,
				email,
				address,
				phone,
				comptype
			};
			props.func(val);
			clearState();
		}
	};
	const clearState = () => {
		setCompname('');
		setEmail('');
		setAddress('');
		setPhone('');
		setComptype('');
		setError(false);
		setShow(false);
	};
	return (
		<>
			<Button className='btn btn-primary bttn' id="Btnn" onClick={handleShow} >
				+ Add Company
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Company Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label className='lab'>Name :</label>
					<div className='flex'></div>
					<input type="text" placeholder="enter the company name" value={compname} onChange={changeCompname} className="FormInput" />
					{
						(error && (compname.length <= 0))
							?
							<label className='error'>please enter the name</label>
							:
							" "
					}
					<div className='flex'></div>
					<label className='lab'>E-mail:</label>
					<div className='flex'></div>
					<input type="email" placeholder="name@example.com" value={email} onChange={changeEmail} className="FormInput" />
					{

						(error && email.length <= 0)
							?
							<label className='error'>please enter the email</label>
							:
							""
					}
					<div className='flex'></div>
					<label className='lab'>Address:</label>
					<div className='flex'></div>
					<input type="text" placeholder="enter the company address" value={address} onChange={changeAddress} className="FormInput" />
					{
						(error && address.length <= 0)
							?
							<label className='error'>please enter the address</label>
							:
							""
					}
					<div className='flex'></div>
					<label className='lab'>Phone Number:</label>
					<div className='flex'></div>
					<input type="text" placeholder="enter the company phone" value={phone} onChange={changePhone} className="FormInput" />
					{
						(error && phone.length <= 0)
							?
							<label className='error'>please enter the phone number</label>
							:
							""
					}
					<div className='flex'></div>
					<label className='lab'> Company Type:</label>
					<div className='flex'></div>
					<input type="text" placeholder="enter the company type" value={comptype} onChange={changeComptype} className="FormInput" />
					{
						(error && comptype.length <= 0)
							?
							<label className='error'>please enter the company type</label>
							:
							""
					}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary"  onClick={handleClose}>
						Close
					</Button>
					<Button className='bttn' onClick={transferValue}>
						{props.name}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
export default AddCompanyBtn;
