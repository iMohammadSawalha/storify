import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LatestOrders from './LatestOrders.json';
const columns = [
  { field: 'id', headerName: 'OrderID', width: 90 ,type: 'number'},
  {
    field: 'user',
    headerName: 'User Name',
    width: 150,
    flex:2,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.avatar}/>
            {params.value.username}
        </>
      );
    }
  },
  {
    field: 'item-name',
    headerName: 'Item Name',
    width: 110,
    flex:2
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 110,
    flex:1,
  },
  {
    field: 'order-total',
    headerName: 'Total',
    width: 110,
    flex:1
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    type:'date',
  },
];

const GridTable =() => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      Latest Orders
      <DataGrid
        rows={LatestOrders}
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
