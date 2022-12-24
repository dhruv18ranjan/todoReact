import React, { useState } from 'react'
import { List } from './List';
import "./styles.css"



const Todo = () => {
    const [inputdata, setInputdata] = useState("");
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    //add Items
    const addItem = () => {
        if (!inputdata) {
            alert("please fill the data");
        }

        else if (inputdata && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputdata }
                    }
                    return elem;
                })

            )
            setToggleSubmit(true);
            setInputdata('')
            setIsEditItem(null);
        }

        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputdata("");
        }
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });

        setToggleSubmit(false);
        setInputdata(newEditItem.name)
        setIsEditItem(id);
    }

    const removeAll = () => {
        setItems([]);
    }



    return (
        <>
            <div className="main-div">

                <div className='contains'>


                    <div className="child-div">
                        <figure>
                            <img src="./images/todo.svg" alt="todologo" />
                            <figcaption>
                                TODO LIST
                            </figcaption>

                        </figure>
                        <div className='addItems'>
                            <input type="text" placeholder='✏️ Add Items' className='form-control'
                                value={inputdata}
                                onChange={(event) => setInputdata(event.target.value)} />

                            {
                                toggleSubmit ? <i className="fa fa-plus add-btn" onClick={addItem}></i> : <i className="fa fa-edit add-btn" title="update" onClick={addItem}></i>
                            }


                        </div>
                        {/* show our items */}

                        <div className="showItems">
                            {items.map((curElem, index) => {
                                return <List curElem={curElem} key={index} editItem={editItem} />
                            })}

                        </div>

                        {/* remove all button */}
                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All"
                                onClick={removeAll} >
                                <span>CHECK LIST</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;