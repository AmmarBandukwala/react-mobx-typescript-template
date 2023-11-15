import { action, computed, makeObservable, observable } from "mobx";

import { AlertColor } from "@mui/material";

import { BaseStore } from "./BaseStore";

export class NotificationStore extends BaseStore {
  message: string = "";
  severity: AlertColor = "success";
  duration: number = 6000;
  open: boolean = false;

  constructor() {
    super();

    makeObservable(this, {
      message: observable,
      severity: observable,
      duration: observable,
      open: observable,
      
      setOpen: action,
      setNotification: action      
    });
  }

  setOpen(state: boolean) {
    this.open = state;
  }

  setNotification(message: string, severity: AlertColor = "success", duration: number = 6000): void {
    this.message = message;
    this.severity = severity;
    this.duration = duration;

    if (this.open == false) this.setOpen(true);
  }
}

export default new NotificationStore();
