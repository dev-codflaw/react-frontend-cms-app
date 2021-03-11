import React from 'react'

const ListComponent = (props) => {
    const data_array = props.data

    const listItems = data_array.map((d) => <li key={d.id}>{d.title}</li>);
    return(
        <>
            {listItems}
        </>
    );
}

export default ListComponent;