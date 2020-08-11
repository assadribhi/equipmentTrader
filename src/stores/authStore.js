import instance from "./instance";

// Mobx
import { decorate, observable } from "mobx";

// JWT
import decode from "jwt-decode";

class AuthStore {
  user = null;
  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signIn = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {}
  };

  signOut = () => {
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {}
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();

export default authStore;
