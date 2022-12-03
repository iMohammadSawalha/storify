import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Orders from './orders.json';

import './Table.css';
const products = Orders;
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  classes: 'RBsTable-id-col',
  editCellStyle: {
    backgroundColor: '#01987A'
  }
}, {
  dataField: 'name',
  text: 'Product Name',
  classes: 'RBsTable-name-col',
  editCellStyle: {
    backgroundColor: '#01987A'
  }
}, {
  dataField: 'order_total',
  text: 'Total',
  classes: 'RBsTable-total-col',
  editCellStyle: {
    backgroundColor: '#01987A'
  }
}];

const RBsTable =() => {
    function beforeSaveCell(oldValue, newValue, row, column, done) {
        setTimeout(() => {
          if (confirm('Do you want to accept this change?')) {
            done(true);
          } else {
            done(false);
          }
        }, 0);
        return { async: true };
      }
      const rowClasses = 'RBsTable-rows';
      const pageButtonRenderer = ({
        page,
        active,
        disable,
        title,
        onPageChange
      }) => {
        const handleClick = (e) => {
          e.preventDefault();
          onPageChange(page);
        };
        const activeStyle = {};
        if (active) {
          activeStyle.backgroundColor = '#01987A';
          activeStyle.color = 'white';
        } else {
          activeStyle.backgroundColor = '#01987A';
          activeStyle.color = 'white';
        }
        if (typeof page === 'string') {
          activeStyle.backgroundColor = 'white';
          activeStyle.color = 'black';
        }
        return (
          <li className="page-item">
            <a href="#" onClick={ handleClick } style={ activeStyle }>{ page }</a>
          </li>
        );
      };
      
      const options = {
        pageButtonRenderer
      };
    return (
  <BootstrapTable 
  classes='RBsTable'
  keyField='id' 
  data={ products } 
  columns={ columns }
  cellEdit={ cellEditFactory({ mode: 'click',beforeSaveCell }) }
  headerClasses="RBsTable-Headers"
  rowClasses ={rowClasses}
  bordered={true}
  hover
  pagination={ paginationFactory(options) }
   />
)}

export default RBsTable;
