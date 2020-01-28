import React from "react";
import Switch from "react-switch";
import { Consumer } from "../../context";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Consumer>
      {value => {
        const { handleTheme, lightTheme, light, dark } = value;
        return (
          <nav className="navbar navbar-dark bg-dark mb-5">
            <span className="navbar-brand mb-0 h1 mx-auto">Lyricsy</span>
            {/* <Switch
              onChange={() => handleTheme()}
              checked={lightTheme}
              checkedIcon={
                <div className="lightTheme">
                  <i className="fas fa-sun "></i>
                </div>
              }
              uncheckedIcon={
                <div className="darkTheme">
                  <i className="fas fa-moon "></i>
                </div>
              }
              onColor="#09f"
            />*/}
          </nav>
        );
      }}
    </Consumer>
  );
};

export default Navbar;
