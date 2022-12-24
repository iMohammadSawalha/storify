import { Card } from "react-bootstrap";

const MiniCards = ({ title, data, subdata, img, imgw, imgh }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex align-items-start justify-content-between">
          <div className="avatar flex-shrink-0">
            <img
              src={img}
              width={imgw}
              height={imgh}
              alt={{ title }.title + " image"}
              className="rounded"
            />
          </div>
        </Card.Title>
        <div className="fw-semibold d-block mb-1">{title}</div>
        <h3 className="card-title mb-2">{data}</h3>
        <small className="text-success fw-semibold">{subdata}</small>
      </Card.Body>
    </Card>
  );
};

export default MiniCards;
