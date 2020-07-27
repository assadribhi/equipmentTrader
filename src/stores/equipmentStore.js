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
      const formData = new FormData();
      for (const key in newEquipment) formData.append(key, newEquipment[key]);
      const res = await axios.post("http://localhost:8000/equipment", formData);
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

  updateEquipment = async (updatedEquipment) => {
    try {
      await axios.put(
        `http://localhost:8000/equipment/${updatedEquipment.id}`,
        updatedEquipment
      );
      const equipment = this.equipment.find(
        (equipment) => equipment.id === updatedEquipment.id
      );
      for (const key in updatedEquipment)
        equipment[key] = updatedEquipment[key];
    } catch (error) {}
  };
}

decorate(EquipmentStore, {
  equipment: observable,
});

const equipmentStore = new EquipmentStore();
equipmentStore.fetchEquipment();

export default equipmentStore;
