import ClientDetails from './components/ClientDetails';
import Footer from './components/Footer';
import InvocieTable from './components/InvoiceTable';
import './components/style.css'


function App() {
  return (
    <>
      <ClientDetails name="Client Name" email="example@gmail.com" mobileNum="+972-000-0000" address="Nablus, Rafydia St" />
      <InvocieTable />
      <Footer total="520" tax="154" />
    </>
  );
}

export default App;

