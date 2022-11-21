import Client from '../../Components/Client';
//import Dates from '../../components/Dates';
import Footer from '../../Components/Footer';
// import Navigation from '../../components/Navigation';
import Table from '../../Components/Table';
import './style.css'
function Invoice() {
  return (
    <div className='container'>
      <Client />
      <Table />
      <Footer />
    </div>
  );
}

export default Invoice;
