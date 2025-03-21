import React from "react";
import { Route, Routes } from "react-router-dom";
import approutes from "./config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {approutes.map((routes) => (
        <Route path={routes.path} Component={routes.Component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
