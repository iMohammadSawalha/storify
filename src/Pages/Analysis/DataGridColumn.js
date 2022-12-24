import { Avatar } from "@mui/material";
import { Button } from "react-bootstrap";

const Cols = [
  { field: "id", headerName: "OrderID", minWidth: 90, type: "number" },
  {
    field: "user",
    headerName: "User Name",
    minWidth: 150,
    flex: 2,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.avatar} />
          {params.value.username}
        </>
      );
    },
  },
  {
    field: "item-name",
    headerName: "Item Name",
    minWidth: 110,
    flex: 2,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    minWidth: 110,
    flex: 1,
    type: "number",
  },
  {
    field: "order-total",
    headerName: "Total",
    minWidth: 110,
    flex: 1,
    type: "number",
    renderCell: (params) => {
      return <>${params.value}</>;
    },
  },
  {
    field: "date",
    headerName: "Date",
    minWidth: 160,
    type: "date",
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    type: "number",
    renderCell: (params) => {
      if (params.value == 10)
        return (
          <Button variant="btn btn-success btn-radius btn-sm">Completed</Button>
        );
      else if (params.value > 0)
        return (
          <Button variant="btn btn-warning btn-radius btn-sm">Pending</Button>
        );
      else if (params.value == 0)
        return (
          <Button variant="btn btn-outline-danger btn-radius btn-sm">
            Cancelled
          </Button>
        );
    },
  },
];

export default Cols;
