import React, { Fragment, useState } from 'react';
import AddCompanyBtn from './AddCompanyBtn';
import jsonData from './mock-data.json';
import './AddCompany.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Card, Table } from 'react-bootstrap';

function AddCompany() {
	const [editFormData, setEditFormData] = useState({
		compname: "",
		email: "",
		address: "",
		phone: "",
		comptype: ""
	})
	const [companyData, setCompanyData] = useState(jsonData);
	const [EditcompanyDataId, setEditcompanyDataId] = useState(null);
	const [companyDataLength, setCompanyDataLength] = useState(companyData.length + 1);
	const [search, setSearch] = useState('');
	const [order, setOrder] = useState("ASC");
	const sorting = (col) => {
		if (order === "ASC") {
			const sorted = [...companyData].sort((a, b) =>
				a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
			);
			setCompanyData(sorted);
			setOrder("DSC");
		}
		if (order === "DSC") {
			const sorted = [...companyData].sort((a, b) =>
				a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
			);
			setCompanyData(sorted);
			setOrder("ASC");
		}
	}
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
	const tableRows = companyData.filter((item) => { return (search.toLowerCase() === '') || (search.toUpperCase() === '') ? item : (item.compname.toLowerCase().includes(search)) || (item.compname.toUpperCase().includes(search)) }).map((companyData) => {
		return (
			<>
				<Fragment>
					{EditcompanyDataId === companyData.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} handleEditFromSubmit={handleEditFromSubmit} />) : (<ReadOnlyRow companyData={companyData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
			</>
		);
	});
	const addRows = (data) => {
		setCompanyDataLength(companyDataLength + 1);
		data.id = companyDataLength;
		const updatedcompanyData = [...companyData];
		updatedcompanyData.push(data);
		setCompanyData(updatedcompanyData);
	};
	return (
		<Card>
			<Card.Header>
				<h5>
					<strong> Companies</strong>
				</h5>

			</Card.Header>
			<Card.Body>

				<InputGroup className="mb-3">
					<AddCompanyBtn name="Add Company" func={addRows} />

					<Form.Control onChange={(e) => setSearch(e.target.value)}
						aria-label="Example text with button addon"
						aria-describedby="basic-addon1"
					/>
				</InputGroup>

				<Table >
					<thead>
						<th onClick={() => { sorting("compname") }}>Name</th>
						<th onClick={() => { sorting("email") }}>Email</th>
						<th onClick={() => { sorting("address") }}>Address</th>
						<th onClick={() => { sorting("phone") }}>Phone</th>
						<th onClick={() => { sorting("comptype") }}>Comptype</th>
						<th></th>
						<th></th>
					</thead>
					<tbody>{tableRows}</tbody>
				</Table>

			</Card.Body>
		</Card>
	);
}
export default AddCompany;
