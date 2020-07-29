import React, { useState } from "react";

// Components
import EquipmentItem from "./EquipmentItem";
import SearchBar from "./SearchBar";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../styles";

const EquipmentList = ({ equipment }) => {
  const [query, setQuery] = useState("");

  const itemList = equipment
    .filter((equipment) =>
      equipment.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((equipment) => (
      <EquipmentItem equipment={equipment} key={equipment.id} />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{itemList}</ListWrapper>
    </div>
  );
};
export default observer(EquipmentList);
