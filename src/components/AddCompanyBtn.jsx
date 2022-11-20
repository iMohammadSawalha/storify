import React, { useState } from 'react';
function AddCompanyBtn(props) {
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
			<button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Add Company
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Company Info</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<label>Name</label>
							<input type="text" value={compname} onChange={changeCompname} /><br/><br/><br/>


							<label>email</label>
							<input type="text" value={email} onChange={changeEmail} /><br/><br/><br/>

							<label>address</label>
							<input type="text" value={address} onChange={changeAddress} /><br/><br/><br/>

							<label>phone</label>
							<input type="text" value={phone} onChange={changePhone} /><br/><br/><br/>

							<label>type</label>
							<input type="text" value={comptype} onChange={changeComptype} /><br/><br/><br/>

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-outline-info" onClick={transferValue}>{props.name}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddCompanyBtn;
