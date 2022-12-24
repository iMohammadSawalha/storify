import { Card } from "react-bootstrap";
import "./components.css";
const LargeCard = ({ title, subtitle, data, datatitle, chart }) => {
  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between pb-0 card-header-clean">
        <div className="card-title mb-0">
          <h5 className="m-0 me-2">{title}</h5>
          <small className="text-muted">{subtitle}</small>
        </div>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-around">
        <div className="d-flex align-items-center gap-1">
          <h2 className="mb-2">{data}</h2>
          <span>{datatitle}</span>
        </div>
        <div>{chart}</div>
      </Card.Body>
    </Card>
  );
};
export default LargeCard;
