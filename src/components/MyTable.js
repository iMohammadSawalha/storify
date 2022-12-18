
import { React } from 'react'
import { Table } from 'react-bootstrap';
const MyTable = (props) => {

    return (
        <Table className="tab">
            <thead>
                {props.children}
            </thead>
            <tbody>{props.TableRowsFunc}</tbody>
        </Table>
    )
}
export default MyTable;