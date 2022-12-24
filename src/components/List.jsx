import React, { useState } from 'react'

export const List = ({curElem,editItem}) => {
    const [selected,setSelected]=useState(false);

    const handleDel=()=>{
        setSelected(true);
    }

    return (
             <div className="eachItem" key={curElem.id}>
       <h3 style={selected  ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{curElem.name}</h3>
            <div className="todo-btn">

                <i className="far fa-edit add-btn" title='edit-item' onClick={() => editItem(curElem.id)} />
                <div className='checkdiv'>

                    <i className="far fa-trash-alt add-btn" title='delete-item' onClick={handleDel} />
                </div>
            </div>
        </div>
    )
}
