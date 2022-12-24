import GridTable from "../../Components/Analysis/GridTables/GridTable";

import DataGridCol from "./DataGridColumn";
import OrdersData from "./Orders-Latest.json";
const Orders = () => {
  return (
    <div style={{ height: "100%" }}>
      <GridTable tableTitle={"Orders"} cols={DataGridCol} data={OrdersData} />
    </div>
  );
};
export default Orders;
