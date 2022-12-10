import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function GridTableGridTable({name,columns,data}){
    return (
      <Box sx={{ height: '83%', width: '100%' }}>
        {name}
        <DataGrid
          rows={data}
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
