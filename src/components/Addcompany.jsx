import React, { Fragment, useState } from 'react';
import AddCompanyBtn from './AddCompanyBtn';
import jsonData from './mock-data.json';
import './AddCompany.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
function AddCompany(props) {
	const [editFormData, setEditFormData] = useState({
		compname: "",
		email: "",
		address: "",
		phone: "",
		comptype: ""
	})
	const [companyData, setCompanyData] = useState(jsonData);
	const [EditcompanyDataId, setEditcompanyDataId] = useState(null);
	const handleDeleteClick = (companyDataId) => {
		const newCompanyData = [...companyData];

		const index = companyData.findIndex((companyData) => companyData.id === companyDataId);

		newCompanyData.splice(index, 1);

		setCompanyData(newCompanyData);
	}
	const handleEditFromSubmit = (event) => {
		event.preventDefault();
		const editedCompanyData = {
			id: EditcompanyDataId,
			compname: editFormData.compname,
			email: editFormData.email,
			address: editFormData.address,
			phone: editFormData.phone,
			comptype: editFormData.comptype
		}
		const newCompanyData = [...companyData]
		const index = companyData.findIndex((companyData) => companyData.id === EditcompanyDataId);
		newCompanyData[index] = editedCompanyData;
		setCompanyData(newCompanyData);
		setEditcompanyDataId(null);
	}
	const handleCancelClick = () => {
		setEditcompanyDataId(null);
	}
	const handleEditFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	}
	const handleEditClick = (event, companyData) => {
		event.preventDefault();

		setEditcompanyDataId(companyData.id);
		const formValues = {
			compname: companyData.compname,
			email: companyData.email,
			address: companyData.address,
			phone: companyData.phone,
			comptype: companyData.comptype
		}

		setEditFormData(formValues)
	};
	const tableRows = companyData.map((companyData) => {
		return (
			<>
				<Fragment>
					{EditcompanyDataId === companyData.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />) : (<ReadOnlyRow companyData={companyData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
			</>
		);
	});



	const addRows = (data) => {
		const totalCompanies = companyData.length;
		data.id = totalCompanies + 1;
		const updatedcompanyData = [...companyData];
		updatedcompanyData.push(data);
		setCompanyData(updatedcompanyData);
	};

	return (
		<div className="card shadow mb-4">
			<div className="card-header py-3">
				<h6 >
					<strong>Other Companies</strong></h6>
				<div id="btn"><AddCompanyBtn name="Add Company" func={addRows} /></div>

			</div>
			<div className="card-body">
				<form onSubmit={handleEditFromSubmit}>
					<table className="table table-stripped">
						<thead>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Comptype</th>
							<th></th>
							<th></th>
						</thead>
						<tbody>{tableRows}</tbody>
					</table>
				</form>
			</div>
		</div>
	);
}
export default AddCompany;
