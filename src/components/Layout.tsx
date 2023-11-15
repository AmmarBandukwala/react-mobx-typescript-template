import React from "react";

import ResponsiveAppBar from "./ResponsiveAppBar";
import Notifications from "./Notifications";
import { Stack } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack spacing={2}>
      <ResponsiveAppBar />
      <main>{children}</main>
      <Notifications />
    </Stack>
  );
};

export default Layout;
