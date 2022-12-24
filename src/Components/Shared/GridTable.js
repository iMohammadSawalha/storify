import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
const GridTable = ({ tableTitle, cols, data }) => {
  const [pageSize, setPageSize] = useState(15);
  return (
    <>
      <span className="h3 m-3">{tableTitle}</span>
      <DataGrid
      style={{height:"90%"}}
        className="mt-2"
        rows={data}
        disableDensitySelector
        columns={cols}
        components={{ Toolbar: GridToolbar }}
        isRowSelectable={(params) => params.row.status > 0}
        checkboxSelection
        disableSelectionOnClick
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15, 50, 100]}
        pagination
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </>
  );
};

export default GridTable;