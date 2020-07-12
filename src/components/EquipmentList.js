// React
import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import EquipmentItem from "./EquipmentItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const EquipmentList = ({
  items,
  deleteItem,
  selectEquipment,
  createEquipment,
}) => {
  const [query, setQuery] = useState("");

  const filteredEquipment = items.filter((equipment) =>
    equipment.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("filtered Equipment", filteredEquipment);

  const itemList = filteredEquipment.map((equipment) => (
    <EquipmentItem
      equipment={equipment}
      key={equipment.id}
      deleteItem={deleteItem}
      selectEquipment={selectEquipment}
    />
  ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="raw">{itemList}</ListWrapper>
      <AddButton createEquipment={createEquipment} />
    </div>
  );
};
export default EquipmentList;
