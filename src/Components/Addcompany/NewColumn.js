import React from 'react'

const NewColumn = (props) => {
    return (
        <th>
            {props.th}{props.children}
        </th>
    )
}
export default NewColumn;