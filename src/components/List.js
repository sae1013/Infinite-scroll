import React from 'react'
import Item from '../components/Item';
function List(props) {
    return (
        <div className="list-container">
            {props.itemlist.map((item)=>
            <Item key ={item.id} item={item}></Item>  
            )}
        </div>
    )
}

export default List
