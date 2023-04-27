import React from "react";
import styles from "./DashboardLayout.module.scss";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <Dashboard />
      <Outlet />
    </div>
  );
}
