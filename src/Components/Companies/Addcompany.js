import AddCompanyBtn from "./AddCompanyBtn";
import jsonData from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "../Products/List.css";
import React, { Fragment, useState } from "react";
import { Card, InputGroup, Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";
import { TbSortAscendingLetters, TbSortAscendingNumbers } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
function AddCompany() {
  const [companyData, setCompanyData] = useState(jsonData);
  const [EditcompanyDataId, setEditcompanyDataId] = useState(null);
  const [companyDataLength, setCompanyDataLength] = useState(
    companyData.length + 1
  );
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [editFormData, setEditFormData] = useState({
    id: companyData.id,
    compname: "",
    email: "",
    address: "",
    phone: "",
    comptype: "",
  });
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
  };
  const handleDeleteClick = (companyDataId) => {
    const newCompanyData = [...companyData];

    const index = companyData.findIndex(
      (companyData) => companyData.id === companyDataId
    );

    newCompanyData.splice(index, 1);

    setCompanyData(newCompanyData);
  };
  const handleEditFromSubmit = (event) => {
    event.preventDefault();
    const editedCompanyData = {
      id: EditcompanyDataId,
      compname: editFormData.compname,
      email: editFormData.email,
      address: editFormData.address,
      phone: editFormData.phone,
      comptype: editFormData.comptype,
    };

    const newCompanyData = [...companyData];
    const index = companyData.findIndex(
      (companyData) => companyData.id === EditcompanyDataId
    );
    newCompanyData[index] = editedCompanyData;
    setCompanyData(newCompanyData);
    setEditcompanyDataId(null);
  };
  const handleCancelClick = () => {
    setEditcompanyDataId(null);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditClick = (event, companyData) => {
    event.preventDefault();

    setEditcompanyDataId(companyData.id);
    const formValues = {
      compname: companyData.compname,
      email: companyData.email,
      address: companyData.address,
      phone: companyData.phone,
      comptype: companyData.comptype,
    };

    setEditFormData(formValues);
  };
  const tableRows = companyData
    .filter((item) => {
      return search.toLowerCase() === "" || search.toUpperCase() === ""
        ? item
        : item.compname.toLowerCase().includes(search) ||
            item.compname.toUpperCase().includes(search);
    })
    .map((companyData) => {
      return (
          <Fragment key={companyData.id}>
            {EditcompanyDataId === companyData.id ? (
              <EditableRow
                key={companyData.id}
                Data={companyData}
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
                handleEditFromSubmit={handleEditFromSubmit}
              />
            ) : (
              <ReadOnlyRow
                key={companyData.id}
                Data={companyData}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
          </Fragment>
      );
    });
  const addRows = (data) => {
    setCompanyDataLength(companyDataLength + 1);
    data.id = companyDataLength;
    const updatedcompanyData = [...companyData];
    updatedcompanyData.push(data);
    setCompanyData(updatedcompanyData);
  };
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="list">
        <Card id="tableCard">
          <Card.Header id="cardH">
            <div className="headerCont">
              <div className="firstCont">
                <h1 id="productH"> Companies </h1>
                <Breadcrumb id="toDash">
                  <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item active>Add Company</Breadcrumb.Item>
                </Breadcrumb>
                <div id="searchForm">
                  <InputGroup id="searchInput">
                    <InputGroup.Text id="basic-addon1">
                      <TfiSearch />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Search....."
                      aria-label="search"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="secCont">
                <AddCompanyBtn func={addRows} />
              </div>
            </div>

            <div className="space"></div>
          </Card.Header>
          <Card.Body>
            <Table className="tab">
              <thead>
                <tr>
                  <th
                    className="cursorFix"
                    onClick={() => {
                      sorting("compname");
                    }}
                  >
                    Name
                    <TbSortAscendingLetters
                      className="cursorFix"
                      onClick={() => {
                        sorting("compname");
                      }}
                    />
                  </th>

                  <th
                    className="cursorFix"
                    onClick={() => {
                      sorting("email");
                    }}
                  >
                    Email
                    <TbSortAscendingLetters
                      className="cursorFix"
                      onClick={() => {
                        sorting("email");
                      }}
                    />
                  </th>

                  <th
                    className="cursorFix"
                    onClick={() => {
                      sorting("address");
                    }}
                  >
                    Address
                    <TbSortAscendingLetters
                      className="cursorFix"
                      onClick={() => {
                        sorting("address");
                      }}
                    />
                  </th>

                  <th
                    className="cursorFix"
                    onClick={() => {
                      sorting("phone");
                    }}
                  >
                    Phone
                    <TbSortAscendingNumbers
                      className="cursorFix"
                      onClick={() => {
                        sorting("phone");
                      }}
                    />
                  </th>

                  <th
                    className="cursorFix"
                    onClick={() => {
                      sorting("comptype");
                    }}
                  >
                    Type
                    <TbSortAscendingLetters
                      className="cursorFix"
                      onClick={() => {
                        sorting("comptype");
                      }}
                    />
                  </th>

                  <th>Edit</th>

                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>
              <div>
                <Pagination size="sm">{items}</Pagination>
              </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default AddCompany;
