import React from "react";



export const ElementsRow = (props) => (
  <tr key={props}>
    <td key={props.items.name}>{props.items.name}</td>
    <td key={props.items.done}>
      <input
        type="checkbox"
        checked={props.items.done}
        key={props.items.done}
        onChange={() => props.toggleItems(props.items)}
       
      />
    </td>
    <td></td>
  </tr>
);
