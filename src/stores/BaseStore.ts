import { action, makeObservable, observable } from "mobx";

import { AppConfiguration } from "../config";

export abstract class BaseStore {
  Configuration: AppConfiguration;

  constructor() {
    this.Configuration = new AppConfiguration();
  }
}

export abstract class BaseCollectionStore<T> extends BaseStore {
  Items: T[] = [];
  SelectedItem: T | undefined;

  constructor() {
    super();

    makeObservable(this, {
      Items: observable,
      SelectedItem: observable,

      setSelectedItem: action,
      setItems: action,
      clearItems: action,
      addItem: action,
      removeItem: action,
      getItems: action
    })
  }

  setSelectedItem(item: T) {
    this.SelectedItem = item;
  }

  setItems(items: T[]) {
    this.Items = items;
  }

  clearItems() {
    this.Items = [];
  }

  addItem(item: T) {
    this.Items.push(item);
  }

  removeItem(identifier: (item: T) => any) {
    const index = this.Items.findIndex((item) => identifier(item) === identifier);
    if (index !== -1) {
      this.Items.splice(index, 1);
    }
  }

  abstract getItems(...args: string[]): void;
}
