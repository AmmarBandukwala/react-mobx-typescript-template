import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom"

const Dashboard = lazy(() => import('../features/dashboard/Dashboard.tsx'));
const CryptoCoins = lazy(() => import("../features/cryptocoins/CryptoCoins.tsx"));

export const paths = [
  {
    path: "/",
    Component: Dashboard,
    name: "Dashboard",
  },
  {
    path: "/cryptocoins",
    Component: CryptoCoins,
    name: "Crypto Coins",
  },
];

const routes = createBrowserRouter(paths);
export default routes;