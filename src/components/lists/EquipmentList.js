import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import EquipmentItem from "../items/EquipmentItem";
import authStore from "../../stores/authStore";
import SearchBar from "../SearchBar";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../../styles";

const EquipmentList = ({ equipment }) => {
  const [query, setQuery] = useState("");

  if (!authStore.user) return <Redirect to="/" />;
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
