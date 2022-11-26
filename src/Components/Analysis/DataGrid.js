import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function createData(customer, quantity, price, total, id) {
  return {
    customer,
    quantity,
    price,
    total,
    id,
  };
}

const rows = [
  createData('George', 2, 44.99, 90, 1001),
  createData('Obada', 1, 15.99, 15.99, 1003),
  createData('Steve', 2, 4.99, 10, 1008),
  createData('Felix', 2, 12.49, 25, 1005),
  createData('Mohammad', 1, 109.99, 109.99, 1004),
  createData('Karen', 1, 549.99, 549.99, 1002),
  createData('Karen', 1,15.99 , 15.99, 1012),
  createData('Ja3far', 2, 15.99, 32, 1010),
  createData('Ta7seen', 1, 15.99, 15.99, 1007),
  createData('Osama', 3, 15.99, 46.99, 1006),
  createData('Yara', 1, 15.99, 15.99, 1009),
  createData('Samara', 4, 15.99, 63.99, 1013),
  createData('Fathi', 1, 15.99, 15.99, 1014),
];

const columns = [
  {
    field: 'customer',
    numeric: false,
    disablePadding: true,
    headerName: 'Customers',
  },
  {
    field: 'quantity',
    type: 'number',
    disablePadding: false,
    headerName: 'Quantity',
  },
  {
    field: 'price',
    type: 'number',
    disablePadding: false,
    headerName: 'Price ',
  },
  {
    field: 'total',
    type: 'number',
    disablePadding: false,
    headerName: 'Total',
  },
  {
    field: 'id',
    type: 'number',
    disablePadding: false,
    headerName: 'Order ID',
  },
];

/*
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
*/

const DataGridTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataGridTable;
