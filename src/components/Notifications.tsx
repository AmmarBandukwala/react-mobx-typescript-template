import React from "react";
import { Observer } from "mobx-react-lite";

import { Snackbar, Alert } from "@mui/material";

import { useStores } from "../config/RootStoreProvider";

const Notifications: React.FC = () => {
  const { notificationStore } = useStores();
  return (
    <Observer>
      {() => {
        return (
          <>
            <Snackbar open={notificationStore.open}>
              <Alert onClose={(e) => notificationStore.setOpen(false)} severity={notificationStore.severity}>
                {notificationStore.message}
              </Alert>
            </Snackbar>
          </>
        );
      }}
    </Observer>
  );
};

export default Notifications;
