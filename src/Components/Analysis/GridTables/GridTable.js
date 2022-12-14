import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
const GridTable =({tableTitle,cols,data}) => {
  const [pageSize, setPageSize] = useState(15);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {tableTitle}
      <DataGrid
        rows={data}
        disableDensitySelector
        columns={cols}
        components={{ Toolbar: GridToolbar }}
        isRowSelectable={(params) => params.row.status > 0}
        checkboxSelection
        disableSelectionOnClick
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5,10,15,50,100]}
        pagination
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
