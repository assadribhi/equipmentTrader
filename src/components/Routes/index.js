import React from "react";
import { Route, Switch } from "react-router";

// Components
import EquipmentList from "../../components/lists/EquipmentList";
import EquipmentDetails from "../../components/details/EquipmentDetails";
import YardDetail from "../../components/details/YardDetail";
import Home from "../../components/Home";
import YardList from "../../components/lists/YardList";
import equipmentStore from "../../stores/equipmentStore";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/equipment/:equipmentSlug">
        <EquipmentDetails />
      </Route>
      <Route path="/yards/:yardSlug">
        <YardDetail />
      </Route>
      <Route path="/yards">
        <YardList />
      </Route>
      <Route path="/equipment">
        <EquipmentList equipment={equipmentStore.equipment} />
      </Route>
    </Switch>
  );
};

export default Routes;
