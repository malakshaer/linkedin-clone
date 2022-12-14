import React, { Fragment } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Jobs from "../components/Jobs";
import Profile from "../components/Profile";
import Notification from "../components/Notification";

const Application = () => {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/Jobs":
      component = <Jobs />;
      break;
    case "/Notification":
      component = <Notification />;
      break;
    case "/Profile":
      component = <Profile />;
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <Header />
      {component}
    </Fragment>
  );
};

export default Application;
