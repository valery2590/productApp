import React from "react";
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";



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
