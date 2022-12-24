import AreaLineChart from "../../Components/Analysis/AreaLineChart";
import ArrowUp from "../../Components/Analysis/ArrowUp";
import TabsCards from "../../Components/Analysis/TabsCards";
import DoughnutChart from "../../Components/Analysis/DoughnutChart";
import GridTable from "../../Components/Analysis/GridTables/GridTable";
import LargeCard from "../../Components/Analysis/LDashCards";
import LineChart from "../../Components/Analysis/LineChart";
import MiniCards from "../../Components/Analysis/MiniDashCards";
import PieChart from "../../Components/Analysis/PieChart";
import PolarChart from "../../Components/Analysis/PolarChart";
import CardItem from "../../Components/Cards/CardItem";
import "./Analysis.css";

const Analysis = () => {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-4 col-md-4 order-1">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-6 mb-4">
                <MiniCards
                  title={"Profit"}
                  data={"$9,689"}
                  subdata={<ArrowUp Percentage={71.2} />}
                  img={require("../../Icons/Dashboard/profit.svg").default}
                  imgw={"30"}
                  imgh={"30"}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-6 mb-4">
                <MiniCards
                  title={"Sales"}
                  data={"$2,209"}
                  subdata={<ArrowUp Percentage={13.42} />}
                  img={require("../../Icons/Dashboard/wallet.svg").default}
                  imgw={"30"}
                  imgh={"30"}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4 card p-1">
            <span className="h4 fw-semibold d-block">Total Revenue</span>
            <div className="Wrapper">
              <AreaLineChart />
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2 mb-4">
            <div className="row">
              <div className="col-6 mb-4">
                <MiniCards
                  title={"Payments"}
                  data={"$2,193"}
                  subdata={<ArrowUp Percentage={10.62} />}
                  img={require("../../Icons/Dashboard/pay.svg").default}
                  imgw={"30"}
                  imgh={"30"}
                />
              </div>
              <div className="col-6 mb-4">
                <MiniCards
                  title={"Transactions"}
                  data={"$8,913"}
                  subdata={<ArrowUp Percentage={21.93} />}
                  img={require("../../Icons/Dashboard/card.svg").default}
                  imgw={"30"}
                  imgh={"30"}
                />
              </div>
              <div className="col-12">
                <LargeCard
                  title={"Order Statistics"}
                  subtitle={"42.82k Total Sales"}
                  data={"8,258"}
                  datatitle={"Total Orders"}
                  chart={<LineChart />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 col-xl-6">
            <TabsCards />
          </div>
        </div>
        <div className="row">
          <GridTable
            tableTitle={"Latest Orders"}
            cols={DataGridCol}
            data={Orders}
          />
        </div>
      </div>
    </div>
  );
};
export default Analysis;
