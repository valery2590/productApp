import React, {useState} from "react";

export const ElementCreator = props =>{

    const [newElementName, setNewElementName] = useState("");

    const updateNewElementValue = e => setNewElementName (e.target.value);

    const createNewElement =() =>{
        props.callback(newElementName);
        setNewElementName('');
    }

    const listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          event.preventDefault();
          createNewElement();
        }}

    return (
        <div className="my-1">
            <input 
            type="text" 
            className="form-control" 
            value={newElementName}
            onKeyPress={listener}
            onChange={updateNewElementValue}   />
            
            <button className="btn btn-primary mt-1"  onClick={createNewElement}>
                add
            </button>

        </div>
    )
}