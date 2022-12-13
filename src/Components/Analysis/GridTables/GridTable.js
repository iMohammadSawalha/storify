import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import OrdersData from './orders.json';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 ,type: 'number'},
  {
    field: 'name',
    headerName: 'Customer Name',
    width: 150,
    editable: true,
    flex:1
  },
  {
    field: 'order_total',
    headerName: 'Total',
    width: 110,
    editable: true,
    flex:2
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    editable: true,
    flex:2
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    editable: true,
  }
];

const GridTable =() => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      Latest Orders
      <DataGrid
        rows={OrdersData}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export  default GridTable;
