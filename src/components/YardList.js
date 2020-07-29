import React, { useState } from "react";

// Components
import YardItem from "./YardItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

// MobX
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../styles";

// Stores
import yardStore from "../stores/yardStore";

const YardList = ({ selectYard }) => {
  const [query, setQuery] = useState("");

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
