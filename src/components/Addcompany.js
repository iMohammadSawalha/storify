import React, { Fragment, useState } from 'react';
import AddCompanyBtn from './AddCompanyBtn';
import jsonData from './mock-data.json';
import ReadOnlyRow from './ReadOnlyRow';
import { TfiSearch } from "react-icons/tfi"
import EditableRow from './EditableRow';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { TbSortAscendingLetters, TbSortAscendingNumbers } from "react-icons/tb";
import { InputGroup } from 'react-bootstrap';
import MyTable from './MyTable';
import NewColumn from './NewColumn';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Style.css';
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
		};
		if (editFormData.compname === "") alert("enter company name");
		else if (editFormData.email === "") alert("enter company email");
		else if (editFormData.address === "") alert("enter company address");
		else if (editFormData.phone === "") alert("enter company phone");
		else if (editFormData.comptype === "") alert("enter company type");
		else {
			const newCompanyData = [...companyData]
			const index = companyData.findIndex((companyData) => companyData.id === EditcompanyDataId);
			newCompanyData[index] = editedCompanyData;
			setCompanyData(newCompanyData);
			setEditcompanyDataId(null);
		}
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
	const tableRows = companyData.filter((item) => {
		return (search.toLowerCase() === '') || (search.toUpperCase() === '')
			?
			item
			:
			(item.compname.toLowerCase().includes(search)) || (item.compname.toUpperCase().includes(search))
	}).map((companyData) => {
		return (
			<>
				<Fragment>
					{EditcompanyDataId === companyData.id
						?
						(
							<EditableRow
								Col1="compname"
								Col2="email"
								Col3="address"
								Col4="phone"
								Col5="comptype"
								editFormData1={editFormData.compname}
								editFormData2={editFormData.email}
								editFormData3={editFormData.address}
								editFormData4={editFormData.phone}
								editFormData5={editFormData.comptype}
								handleEditFormChange={handleEditFormChange}
								handleCancelClick={handleCancelClick}
								handleEditFromSubmit={handleEditFromSubmit}
							/>
						)
						:
						(
							<ReadOnlyRow
								Data1={companyData.compname}
								Data2={companyData.email}
								Data3={companyData.address}
								Data4={companyData.phone}
								Data5={companyData.comptype}
								Data={companyData}
								handleEditClick={handleEditClick}
								handleDeleteClick={handleDeleteClick}
							/>
						)
					}

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
		<div className='list' >
			<Card id='tableCard'>
				<Card.Header>
					<h1> Companies</h1>
					<Breadcrumb>
						<Breadcrumb.Item >
							Dashboard
						</Breadcrumb.Item>
						<Breadcrumb.Item active>Add Company</Breadcrumb.Item>
					</Breadcrumb>

					<div className='row'>
						<div className="col-lg-5 col-md-5 col-sm-5 col-xs-2 searchForm">
							<InputGroup id="searchInput">
								<InputGroup.Text id="basic-addon1"><TfiSearch /></InputGroup.Text>
								<Form.Control
									placeholder="Search Company"
									aria-label="search"
									aria-describedby="basic-addon1"
									onChange={(e) => setSearch(e.target.value)} />
							</InputGroup>
						</div>
						<div className="col-lg-5 col-md-3 col-sm-3 col-xs-3 "></div>
						<div className="col-lg-2 col-md-4 col-sm-4 col-xs-7 addPro">
							<AddCompanyBtn func={addRows} />
						</div>

					</div>
					<div className='space'></div>
				</Card.Header>
				<Card.Body>
					<MyTable
						striped className="tab"
						TableRowsFunc={tableRows}>
						<NewColumn th="Name">
							<TbSortAscendingLetters
								className='icon'
								onClick={() => { sorting("compname") }}
							/>
						</NewColumn>

						<NewColumn th="Email ">
							<TbSortAscendingLetters
								className='icon'
								onClick={() => { sorting("email") }}
							/>
						</NewColumn>

						<NewColumn th="Address">
							<TbSortAscendingLetters
								className='icon'
								onClick={() => { sorting("address") }}
							/>
						</NewColumn>

						<NewColumn th="Phone">
							<TbSortAscendingNumbers
								className='icon'
								onClick={() => { sorting("phone") }}
							/>
						</NewColumn>

						<NewColumn th="Comptype">
							<TbSortAscendingLetters
								className='icon'
								onClick={() => { sorting("comptype") }}
							/>
						</NewColumn>

						<NewColumn th="Edit"></NewColumn>
						<NewColumn th="Delete"></NewColumn>
					</MyTable>

				</Card.Body>
			</Card>
		</div >
	);
};
export default AddCompany;
