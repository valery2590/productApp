import React, {useState} from "react";

export const ElementCreator = props =>{

    const [newElementName, setNewElementName] = useState("");

    const updateNewElementValue = e => setNewElementName (e.target.value);

    const createNewElement =() =>{
        props.callback(newElementName);
        setNewElementName('');
    }

    return (
        <div className="my-1">
            <input 
            type="text" 
            className="form-control" 
            value={newElementName}
            onChange={updateNewElementValue}   />

            <button className="btn btn-primary mt-1" onClick={createNewElement}>
                add
            </button>

        </div>
    )
}