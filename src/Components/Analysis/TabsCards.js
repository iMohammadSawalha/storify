import LargeCard from "./LDashCards";
import PolarChart from "./PolarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Card } from "react-bootstrap";
function TabsCards() {
  return (
    <Card className="mb-4">
      <Tabs defaultActiveKey="Traffic" className="mb-3 border-0">
        <Tab eventKey="Orders" title="Orders">
          <LargeCard
            title={"Order Statistics"}
            subtitle={"42.82k Total Sales"}
            data={"8,258"}
            datatitle={"Total Orders"}
            chart={<DoughnutChart />}
          />
        </Tab>
        <Tab eventKey="Traffic" title="Traffic">
          <LargeCard
            title={"Traffic Source"}
            subtitle={"3.2k Visits last month"}
            data={"143"}
            datatitle={"Today"}
            chart={<PolarChart />}
          />
        </Tab>
        <Tab eventKey="Sales" title="Sales">
          <LargeCard
            title={"Most Sold"}
            subtitle={"Electronic 82.5k"}
            data={"155.4k"}
            datatitle={"Total Sold"}
            chart={<PieChart />}
          />
        </Tab>
      </Tabs>
    </Card>
  );
}

export default TabsCards;
