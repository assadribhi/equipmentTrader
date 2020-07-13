// Data
import items from "../items";

// Mobx
import { decorate, observable } from "mobx";

class EquipmentStore {
  equipment = items;

  createEquipment = (newEquipment) => {
    this.equipment.push(newEquipment);
  };

  deleteItem = (equipmentId) => {
    this.equipment = this.equipment.filter(
      (equipment) => equipment.id !== +equipmentId
    );
  };
}

decorate(EquipmentStore, {
  equipment: observable,
});

const equipmentStore = new EquipmentStore();
export default equipmentStore;
