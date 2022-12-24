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
			<Button className='btn' id='bttn' onClick={handleShow} >
				+ Add Company
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Company Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label className='m-2'>Name :</label>
					<input type="text" placeholder="enter the company name" value={compname} onChange={changeCompname} className="form-control mb-2"  style={{width:"60%"}}/>
					{
						(error && (compname.length <= 0))
							?
							<>
								<label className='error'>Please enter the name<br/></label>
								<br></br>
							</>
							:
							" "
					}
					<label className='m-2'>E-mail:</label>
					<input type="email" placeholder="name@example.com" value={email} onChange={changeEmail} className="form-control mb-2"  style={{width:"60%"}} />
					{

						(error && email.length <= 0)
							?
							<>
								<label className='error'>Please enter the email</label>
								<br></br>
							</>
							:
							""
					}
					<label className='m-2'>Address:</label>
					<input type="text" placeholder="enter the company address" value={address} onChange={changeAddress} className="form-control mb-2"  style={{width:"60%"}}/>
					{
						(error && address.length <= 0)
							?
							<>
							<label className='error'>Please enter the address</label>
							<br></br>
							</>
							:
							""
					}
					<label className='m-2'>Phone Number:</label>
					<input type="text" placeholder="enter the company phone" value={phone} onChange={changePhone} className="form-control mb-2"  style={{width:"60%"}}/>
					{
						(error && phone.length <= 0)
							?
							<>
							<label className='error'>Please enter the phone number</label>
							<br></br>
							</>
							:
							""
					}
					<label className='m-2'> Company Type:</label>
					<input type="text" placeholder="enter the company type" value={comptype} onChange={changeComptype} className="form-control mb-2" style={{width:"60%"}} />
					{
						(error && comptype.length <= 0)
							?
							<>
							<label className='error'>Please enter the company type</label>
							<br></br>
							</>
							:
							""
					}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary"  onClick={handleClose}>
						Close
					</Button>
					<Button className='bttn' style={{backgroundColor:"var(--dark)",borderColor:"var(--dark)"}} onClick={transferValue}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
export default AddCompanyBtn;
