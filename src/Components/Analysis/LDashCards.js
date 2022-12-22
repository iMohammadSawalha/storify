
import "./components.css";
const LargeCard = ({title,subtitle,data,datatitle,chart}) => {
    return (
        <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between pb-0 card-header-clean">
                <div className="card-title mb-0">
                    <h5 className="m-0 me-2">{title}</h5>
                    <small className="text-muted">{subtitle}</small>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3 make-it-relative">
                    <div className="d-flex flex-column align-items-center gap-1">
                        <h2 className="mb-2">{data}</h2>
                        <span>{datatitle}</span>
                    </div>
                    <div className="orderStatisticsChart">
                        {chart}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LargeCard;
