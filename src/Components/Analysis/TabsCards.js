import LargeCard from "./LDashCards";
import PolarChart from "./PolarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
function TabsCards() {
  return (
    <Card className="mb-4">
      <Tab.Container id="left-tabs-example" defaultActiveKey="Traffic">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="Orders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Traffic">Traffic</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Sales">Sales</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Orders">
                <LargeCard
                  title={"Order Statistics"}
                  subtitle={"42.82k Total Orders"}
                  data={"8,258"}
                  datatitle={"Total Orders"}
                  chart={<DoughnutChart />}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="Traffic">
                <LargeCard
                  title={"Traffic Source"}
                  subtitle={"3.2k Visits last month"}
                  data={"143"}
                  datatitle={"Today"}
                  chart={<PolarChart />}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="Sales">
                <LargeCard
                  title={"Most Sold"}
                  subtitle={"Electronic 82.5k"}
                  data={"155.4k"}
                  datatitle={"Total Sold"}
                  chart={<PieChart />}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Card>
  );
}

export default TabsCards;
