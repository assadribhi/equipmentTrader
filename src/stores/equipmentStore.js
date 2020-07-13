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

  updateEquipment = (updatedEquipment) => {
    const equipment = this.equipment.find(
      (equipment) => equipment.id === updatedEquipment.id
    );
    equipment.name = updatedEquipment.name;
    equipment.price = updatedEquipment.price;
    equipment.description = updatedEquipment.description;
    equipment.image = updatedEquipment.image;
  };
}

decorate(EquipmentStore, {
  equipment: observable,
});

const equipmentStore = new EquipmentStore();
export default equipmentStore;
