const Footer = () => {
    const btnPrint = () => {
        window.print();
    }
    return (
        <div className="row ">
            <div className="container-fluid">
                <p className="fw-bold total">Sub Total: <span>1000$</span> </p>
                <p className="fw-bold sm-end tax">Tax: <span> 15$</span> </p>
                <div className="buttons ">
                    <button className="btn btn-outline-primary" onClick={btnPrint}>Print</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;
