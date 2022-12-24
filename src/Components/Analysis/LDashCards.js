const LargeCard = ({ title, subtitle, data, datatitle, chart }) => {
  return (
    <div className="card h-100 border-0">
      <div className="card-header d-flex align-items-center justify-content-between pb-0 border-bottom-0 bg-white">
        <div className="card-title mb-0">
          <h5 className="m-0 me-2">{title}</h5>
          <small className="text-muted">{subtitle}</small>
        </div>
      </div>
      <div className="card-body d-flex flex-column align-items-center">
        <div>{chart}</div>
        <div className="d-flex align-items-center gap-1">
          <h2 className="mb-2">{data}</h2>
          <span>{datatitle}</span>
        </div>
      </div>
    </div>
  );
};
export default LargeCard;
