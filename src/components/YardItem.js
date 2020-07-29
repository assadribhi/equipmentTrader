// Components
import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";

// React
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { YardWrapper } from "../styles";
import UpdateButton from "./buttons/UpdateButton";

const YardItem = ({ yard }) => {
  return (
    <YardWrapper key={yard.id} className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/yards/${yard.slug}`}>
        <img src={yard.yardImage} alt={yard.name} />
      </Link>
      <p className="yardName">{yard.name} Rental</p>
      <p className="yardPrice">{yard.price} KD / Day</p>
      <UpdateButton yard={yard} />
      <br />
      <DeleteButton yardId={yard.id} />
    </YardWrapper>
  );
};

export default observer(YardItem);
