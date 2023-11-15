import React from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./config/Routes";

import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
};

export default App;
