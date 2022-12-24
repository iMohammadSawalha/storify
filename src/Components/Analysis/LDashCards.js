import { Card } from "react-bootstrap";

const LargeCard = ({ title, subtitle, data, datatitle, chart }) => {
  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between pb-0 border-bottom-0 bg-white">
        <Card.Title className="mb-0">
          <h5 className="m-0 me-2">{title}</h5>
          <small className="text-muted">{subtitle}</small>
        </Card.Title>
      </Card.Header>
      <Card.Body className="d-flex flex-column align-items-center">
        <div>{chart}</div>
        <div className="d-flex align-items-center gap-1">
          <h2 className="mb-2">{data}</h2>
          <span>{datatitle}</span>
        </div>
      </Card.Body>
    </Card>
  );
};
export default LargeCard;
