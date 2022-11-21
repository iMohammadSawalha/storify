const Table = () => {
    return (
        <table className="table table-hover m-4">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className="ms-1">
                    <td>
                        <span className="item"> Your Item Name</span>
                        <p>item Description goes have</p>
                    </td>
                    <td>370$</td>
                    <td>400$</td>
                </tr>
                <tr>
                    <td>
                        <span className="item"> Your Item Name</span>
                        <p>item Description goes have</p>
                    </td>
                    <td>700$</td>
                    <td>373$</td>
                </tr>
                <tr>
                    <td><span className="item"> Your Item Name</span>
                        <p>item Description goes have</p></td>
                    <td>800$</td>
                    <td>900$</td>
                </tr>
                <tr>
                    <td><span className="item"> Your Item Name</span>
                        <p>item Description goes have</p></td>
                    <td>300$</td>
                    <td>900$</td>
                </tr>
                <tr>
                    <td><span className="item"> Your Item Name</span>
                        <p>item Description goes have</p></td>
                    <td>1000$</td>
                    <td>600$</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;

