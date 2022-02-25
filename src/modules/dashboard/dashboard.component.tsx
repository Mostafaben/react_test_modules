import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import SideBar from "./components/sidebar/sidebar.component";
import HomePage from "./pages/home_page/home_page.component";

const Dashboard = () => {
  return (
    <div className="main-container">
      <Header></Header>
      <SideBar></SideBar>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
};

export default Dashboard;
