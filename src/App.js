import ClientDetails from './components/ClientDetails';
import Footer from './components/Footer';
import InvocieTable from './components/InvoiceTable';
import './components/style.css'
const Invoice = () => {
  return (
    <div className='container'>
      <ClientDetails data={{ Fname: "Client Name", email: "example@gmail.com", mobileNum: "+972-000-0000", address: "Nablus, Rafydia St", total: 9999 }} />
      <InvocieTable />
      <Footer data={{ total: "520", tax: "154" }} />
    </div>
  );
}

export default Invoice;