import authStore, { AuthStore } from "./AuthStore";
import cryptoCoinStore, { CryptoCoinStore } from "./CryptoCoinStore";
import notificationStore, { NotificationStore } from "./NotificationStore";
import uiStore, { UIStore } from "./UIStore";

export type RootStore = {
  authStore: AuthStore;
  cryptoCoinStore: CryptoCoinStore;
  notificationStore: NotificationStore;
  uiStore: UIStore;
};

const rootStore: RootStore = {
  authStore,
  cryptoCoinStore,
  notificationStore,
  uiStore,
};

export default rootStore;