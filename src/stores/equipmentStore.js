import axios from "axios";

import slugify from "react-slugify";

// Mobx
import { decorate, observable } from "mobx";

class EquipmentStore {
  equipment = [];

  fetchEquipment = async () => {
    try {
      const res = await axios.get("http://localhost:8000/equipment");
      this.equipment = res.data;
    } catch (error) {}
  };

  createEquipment = (newEquipment) => {
    newEquipment.slug = slugify(newEquipment.name);
    newEquipment.id =
      this.equipment.length !== 0
        ? this.equipment[this.equipment.length - 1].id + 1
        : 1;
    this.equipment.push(newEquipment);
  };

  deleteItem = async (equipmentId) => {
    try {
      await axios.delete(`http://localhost:8000/equipment/${equipmentId}`);
      this.equipment = this.equipment.filter(
        (equipment) => equipment.id !== +equipmentId
      );
    } catch (error) {}
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
equipmentStore.fetchEquipment();

export default equipmentStore;
