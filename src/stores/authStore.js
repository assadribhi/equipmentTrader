import axios from "axios";

// Mobx
import { decorate } from "mobx";

class AuthStore {
  signup = async (userData) => {
    try {
      await axios.post("http://localhost:8000/signup", userData);
    } catch (error) {}
  };
}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;
