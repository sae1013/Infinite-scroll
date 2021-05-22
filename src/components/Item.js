import React from 'react'

function Item(props) {
    return (
        <div className="item">
            List item {props.item.id}
        </div>
    )
}

export default Item
