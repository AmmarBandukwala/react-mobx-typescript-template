import { action, makeObservable, observable } from "mobx";

import { BaseStore } from "./BaseStore";

export class AuthStore extends BaseStore {
  isAuthenticated = false;

  constructor() {
    super();

    makeObservable(this, {
      isAuthenticated: observable,
      
      login: action,
      logout: action
    })
  }

  login = async () => {
    try {
      // Implement your OpenID authentication logic here
      // For simplicity, we're assuming authentication is successful
      this.isAuthenticated = true;
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  logout = () => {
    // Implement logout logic here
    this.isAuthenticated = false;
  };
}

export default new AuthStore();
