// Mobx
import { observer } from "mobx-react";

// Components
import EquipmentItem from "./EquipmentItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

// React
import React, { useState } from "react";

// Styles
import { ListWrapper } from "../styles";

// Stores
import equipmentStore from "../stores/equipmentStore";

const EquipmentList = ({ selectEquipment }) => {
  const [query, setQuery] = useState("");

  const filteredEquipment = equipmentStore.equipment.filter((equipment) =>
    equipment.name.toLowerCase().includes(query.toLowerCase())
  );

  const itemList = filteredEquipment.map((equipment) => (
    <EquipmentItem
      equipment={equipment}
      key={equipment.id}
      selectEquipment={selectEquipment}
    />
  ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="raw">{itemList}</ListWrapper>
      <AddButton />
    </div>
  );
};
export default observer(EquipmentList);
