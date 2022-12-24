import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ReactToPrint from "react-to-print";
import ClientDetails from '../../Components/Invoices/ClientDetails';
import Footer from '../../Components/Invoices/Footer';
import InvocieTable from '../../Components/Invoices/InvoiceTable';
import './style.css';

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <Card className="container">
      <div className='container h-50 p-3 printData'>
        <div ref={(el) => (componentRef = el)} >
          <ClientDetails data={{ name: "Client Name", email: "example@gmail.com", phone: "+972-000-0000", address: "Nablus, Rafydia St", total: 1466.99 }} />
          <InvocieTable />
          <Footer data={{ total: "520", tax: "154", }} />
        </div>
        <ReactToPrint
          trigger={() => <Button variant="btn col-1 btn-outline-primary btn-print" >Print</Button>}
          content={() => componentRef}
        />
      </div>
    </Card>
  );
}


