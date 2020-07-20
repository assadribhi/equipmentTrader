import axios from "axios";

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

  createEquipment = async (newEquipment) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/equipment",
        newEquipment
      );
      this.equipment.push(res.data);
    } catch (error) {}
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
