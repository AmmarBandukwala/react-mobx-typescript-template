import { action, makeObservable, observable } from "mobx";

import { BaseStore } from "./BaseStore";

export class UIStore extends BaseStore {
  language: string = "en-US";

  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;

  modalOpen: boolean = false;

  constructor() {
    super();

    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    };

    makeObservable(this, {
      language: observable,
      modalOpen: observable,
      windowWidth: observable,
      windowHeight: observable,
      setModalOpen: action,
      setLanguage: action,
    });
  }

  setModalOpen(state: boolean) {
    this.modalOpen = state;
  }

  setLanguage(language: string = "en_US") {
    this.language = language;
  }
}

export default new UIStore();
