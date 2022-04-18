import React, { useEffect, useState } from "react";
import { ElementsRow } from "./components/ElementRows";
import { ElementBanner } from "./components/ElementBanner";
import { ElementCreator } from "./components/ElementCreator";
import { VisibilityControl } from "./components/VisibilityControl";
import "./App.css"

function App() {
  const [userName, setUserName] = useState('I');
  const [elementsItems, setElementsItems] = useState([
    { name: "", done: false , date: ''},

  ]);

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(()=> {
   let data = localStorage.getItem('tasks');
    if (data != null){
      setElementsItems(JSON.parse(data))
    }else{
      setUserName('Valery')
      setElementsItems([
        { name: "product one", done: false, date: new Date().toLocaleDateString() },
        { name: "producto two", done: false , date: new Date().toLocaleDateString()},
        { name: "product three", done: false, date: '16/03/2021'},
        { name: "product four", done: false, date: '08/02/2022'}
      ])
      setShowCompleted(true);
    }
  },[])

  useEffect(()=>{
      localStorage.setItem('tasks', JSON.stringify(elementsItems));
  },[elementsItems])

  const createNewElement = newElement =>{
    if (!elementsItems.find(i => i.name === newElement)){
      setElementsItems([...elementsItems, {name : newElement , done : false, date: new Date().toLocaleDateString()}])
    }
  }

  const toggleItems = items =>
    setElementsItems(
      elementsItems.map(i => i.name === items.name ? { ...i, done: !i.done } : i));

  const elementsItemsTableRows = (doneValue) =>
    elementsItems
    .filter(items => items.done === doneValue)
    .map((items) => (
      <ElementsRow items={items} key={items.name} toggleItems={toggleItems} />
    ));

  return (
    <div className="App">
      <ElementBanner userName={userName} elementsItems={elementsItems} />
      
      <ElementCreator callback={createNewElement} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr >
            <th>description</th>
            <th>done</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>{elementsItemsTableRows(false)}</tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl 
        description="Completed Task"
        isChecked={showCompleted}
        callback={checked=>setShowCompleted(checked)}
        />
      </div>
      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {elementsItemsTableRows(true)}
            </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
