import axios from "axios";

// Mobx
import { decorate, observable } from "mobx";

class EquipmentStore {
  equipment = [];
  loading = true;

  fetchEquipment = async () => {
    try {
      const res = await axios.get("http://localhost:8000/equipment");
      this.equipment = res.data;
      this.loading = false;
    } catch (error) {}
  };

  getEquipmentById = (equipmentId) => {
    return this.equipment.find((equipment) => equipment.id === equipmentId);
  };

  createEquipment = async (newEquipment, yard) => {
    try {
      const formData = new FormData();
      for (const key in newEquipment) formData.append(key, newEquipment[key]);
      const res = await axios.post(
        `http://localhost:8000/yards/${yard.id}/equipment`,
        formData
      );
      const equipment = res.data;
      this.equipment.push(equipment);
      yard.equipment.push({ id: equipment.id });
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
      equipment.image = URL.createObjectURL(updatedEquipment.image);
    } catch (error) {}
  };
}

decorate(EquipmentStore, {
  equipment: observable,
  loading: observable,
});

const equipmentStore = new EquipmentStore();
equipmentStore.fetchEquipment();

export default equipmentStore;
