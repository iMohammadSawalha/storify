import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
const GridTable =({tableTitle,cols,data}) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {tableTitle}
      <DataGrid
        rows={data}
        disableDensitySelector
        columns={cols}
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
