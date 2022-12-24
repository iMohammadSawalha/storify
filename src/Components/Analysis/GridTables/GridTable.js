import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { Card } from "react-bootstrap";
const GridTable = ({ tableTitle, cols, data }) => {
  const [pageSize, setPageSize] = useState(15);
  return (
    <Card style={{ height: 400, width: "100%" }}>
      <div className="h4 mt-1">{tableTitle}</div>
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
    </Card>
  );
};

export default GridTable;
