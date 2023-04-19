import React from "react";

export default const ItemsList = (props) => {
  const { items = [] } = props;
  const listItems = items.map((item) => (
        <li key={item.id}>{item.content}></li>;
    ));

  return (
      <ul className="items-list">
        {listItems}
      </ul>
  );
  };