import ClientDetails from './components/ClientDetails';
import Footer from './components/Footer';
import InvocieTable from './components/InvoiceTable';
import './components/style.css'
import ErrorPage from './ErrorPage/ErrorPage';

const Invoice = () => {
  return (
    <>
      <div className='container h-50 p-3'>
        <ClientDetails data={{ name: "Yousef Saeed", email: "Yousef31@gmail.com", phone: "0599975520", address: "Amman, Jordan", total: 1466.99 }} />
        <InvocieTable />
        <Footer data={{ total: "520", tax: "154" }} />
      </div>

      <ErrorPage />
    </>
  );
}

export default Invoice;