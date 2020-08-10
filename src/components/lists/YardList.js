import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// Components
import YardItem from "../items/YardItem";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../../styles";

// Stores
import yardStore from "../../stores/yardStore";
import authStore from "../../stores/authStore";

const YardList = ({ selectYard }) => {
  const [query, setQuery] = useState("");
  if (!authStore.user) return <Redirect to="/" />;

  const yardList = yardStore.yards
    .filter((yard) => yard.name.toLowerCase().includes(query.toLowerCase()))
    .map((yard) => (
      <YardItem yard={yard} key={yard.id} selectYard={selectYard} />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{yardList}</ListWrapper>
      <AddButton />
    </div>
  );
};
export default observer(YardList);
