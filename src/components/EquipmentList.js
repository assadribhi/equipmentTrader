// React
import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import EquipmentItem from "./EquipmentItem";
import SearchBar from "./SearchBar";

const EquipmentList = (props) => {
  const [query, setQuery] = useState("");

  const filteredEquipment = props.items.filter((equipment) =>
    equipment.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("filtered Equipment", filteredEquipment);

  const itemList = filteredEquipment.map((equipment) => (
    <EquipmentItem
      equipment={equipment}
      key={equipment.id}
      deleteItem={props.deleteItem}
      selectEquipment={props.selectEquipment}
    />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemList}</ListWrapper>
    </>
  );
};
export default EquipmentList;
