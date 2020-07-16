import React, { useState } from "react";

// Components
import EquipmentItem from "./EquipmentItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../styles";

// Stores
import equipmentStore from "../stores/equipmentStore";

const EquipmentList = ({ selectEquipment }) => {
  const [query, setQuery] = useState("");

  const itemList = equipmentStore.equipment
    .filter((equipment) =>
      equipment.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((equipment) => (
      <EquipmentItem
        equipment={equipment}
        key={equipment.id}
        selectEquipment={selectEquipment}
      />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{itemList}</ListWrapper>
      <AddButton />
    </div>
  );
};
export default observer(EquipmentList);
