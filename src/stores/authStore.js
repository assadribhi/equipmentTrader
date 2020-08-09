import instance from "./instance";

// Mobx
import { decorate } from "mobx";

class AuthStore {
  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {}
  };
}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;
