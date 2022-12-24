import React from "react";
import "./Dashboard.css";
import AreaLineChart from "../../Components/Analysis/AreaLineChart";
import DoughnutChart from "../../Components/Analysis/DoughnutChart";
import LargeCard from "../../Components/Analysis/LDashCards";
import LineChart from "../../Components/Analysis/LineChart";
import PieChart from "../../Components/Analysis/PieChart";
import PolarChart from "../../Components/Analysis/PolarChart";
import CardItem from "../../Components/Cards/CardItem";
import cardData from "../../Data/Dashboard/data.json";
import statisticCardData from "../../Data/Dashboard/statisticCardData.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StatisticCard from "../../Components/Cards/StatisticCard";
import TaxCalc from "../../Components/TaxCalculator/TaxCalc";
import { Card } from "react-bootstrap";
import GlobalData from "../../Data/Dashboard/ChartData.json";

const Dashboard = () => {
  //Todo:
  //Order statistics
  return (
    <>
      <Row className="dashboardBox">
        <Col
          xl={6}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 10 }}
          xs={{ span: 12 }}
          className="mb-4"
        >
          <CardItem
            info={{
              title: "Hi, Mohammad",
              data: "Welcome back to your admin control panel!",
              color: "skyblue",
            }}
          />
          <Row className="dashboardBox mt-4">
            {statisticCardData.map((statisticCardData) => (
              <Col
                key={statisticCardData.id}
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 12 }}
                className="mb-3"
              >
                <StatisticCard
                  key={statisticCardData.id}
                  info={statisticCardData}
                  data={statisticCardData.data}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col>
          <Row className="dashboardBox">
            {cardData.map((cardData) => (
              <Col
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 10 }}
                xs={{ span: 12 }}
                key={cardData.id}
                className="mb-3"
              >
                <CardItem key={cardData.id} info={cardData} />
              </Col>
            ))}
            <Col
              xl={{ span: 6 }}
              xs={{ span: 12 }}
              sm={{ span: 10 }}
              className="mb-4"
            >
              <TaxCalc />
            </Col>
            <Col
              xl={{ span: 6 }}
              xs={{ span: 12 }}
              sm={{ span: 10 }}
              className="mb-4"
            >
              <LargeCard
                title={"Orders"}
                subtitle={"42.82k Total Sales"}
                chart={
                  <div className="wrapper">
                    <LineChart GlobalData={GlobalData} />
                  </div>
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4 mb-4 d-flex justify-content-center">
        <Col
          xl={{ span: 6 }}
          lg={{ span: 6 }}
          md={{ span: 6 }}
          className="mb-4"
        >
          <Card>
            <span className="h4 fw-semibold d-block p-4">Total Revenue</span>
            <div className="Wrapper">
              <AreaLineChart GlobalData={GlobalData} />
            </div>
          </Card>
        </Col>
        <Col
          xl={{ span: 4 }}
          lg={{ span: 6 }}
          md={{ span: 6 }}
          className="mb-4"
        >
          <LargeCard
            title={"Traffic Source"}
            subtitle={"3.2k Visits last month"}
            data={"143"}
            datatitle={"Today"}
            chart={<PolarChart GlobalData={GlobalData} />}
          />
        </Col>
        <Col xl={{ span: 6 }} md={{ span: 6 }} className="mb-4">
          <LargeCard
            title={"Order Statistics"}
            subtitle={"42.82k Total Orders"}
            data={"8,258"}
            datatitle={"Total Orders"}
            chart={<DoughnutChart GlobalData={GlobalData} />}
          />
        </Col>
        <Col xl={{ span: 4 }} md={{ span: 6 }} className="mb-4">
          <LargeCard
            title={"Most Sold"}
            subtitle={"Electronic 82.5k"}
            data={"155.4k"}
            datatitle={"Total Sold"}
            chart={<PieChart GlobalData={GlobalData} />}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
