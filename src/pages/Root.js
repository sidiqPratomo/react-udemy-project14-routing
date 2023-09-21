import React from "react";
import { Outlet } from "react-router-dom";
import Navigations from "../component/Navigations";

const RootLayout = () => {
  return (
    <>
      <Navigations />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
