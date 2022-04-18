import React from "react";

export const ElementBanner = props => (
  <h4 className="bg-primary text-white text-center p-4">
  {props.userName} have {props.elementsItems.filter(i => !i.done).length} products left
  </h4>
);
 