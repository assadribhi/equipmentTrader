import instance from "./instance";

// Mobx
import { decorate, observable } from "mobx";

class YardStore {
  yards = [];
  loading = true;

  fetchYards = async () => {
    try {
      const res = await instance.get("/yards");
      this.yards = res.data;
      this.loading = false;
    } catch (error) {}
  };

  createYard = async (newYard) => {
    try {
      const formData = new FormData();
      for (const key in newYard) formData.append(key, newYard[key]);
      const res = await instance.post("/yards", formData);
      this.yards.push(res.data);
    } catch (error) {}
  };

  deleteYard = async (yardId) => {
    try {
      await instance.delete(`/yards/${yardId}`);
      this.yards = this.yards.filter((yard) => yard.id !== +yardId);
    } catch (error) {}
  };

  updateYard = async (updatedYard) => {
    try {
      await instance.put(`/yards/${updatedYard.id}`, updatedYard);
      const yards = this.yards.find((yard) => yard.id === updatedYard.id);
      for (const key in updatedYard) yards[key] = updatedYard[key];
    } catch (error) {}
  };
}

decorate(YardStore, {
  yards: observable,
  loading: observable,
});

const yardStore = new YardStore();
yardStore.fetchYards();

export default yardStore;
