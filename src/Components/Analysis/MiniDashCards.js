const MiniCards = ({ title, data, subdata, img, imgw, imgh }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title d-flex align-items-start justify-content-between">
          <div className="avatar flex-shrink-0">
            <img
              src={img}
              width={imgw}
              height={imgh}
              alt={{ title }.title + " image"}
              className="rounded"
            />
          </div>
        </div>
        <span className="fw-semibold d-block mb-1">{title}</span>
        <h3 className="card-title mb-2">{data}</h3>
        <small className="text-success fw-semibold">{subdata}</small>
      </div>
    </div>
  );
};

export default MiniCards;
