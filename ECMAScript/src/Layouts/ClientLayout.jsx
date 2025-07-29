import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

export default ClientLayout;
