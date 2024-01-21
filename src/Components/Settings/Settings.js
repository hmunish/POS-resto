import { memo, useState } from "react";
import ManageProduct from "./ManageProduct";
import "./Settings.css";

const tabs = { 3: <ManageProduct /> };

const Settings = () => {
  const [tabToDisplay, setTabToDisplay] = useState(3);

  const handleSwitchTab = (e) => {
    e.currentTarget.querySelector(".active").classList.remove("active");
    const target = e.target.closest("li");
    target.classList.add("active");
    setTabToDisplay(target.dataset.tabno);
  };

  return (
    <section className="settings">
      <h1 className="settings">Settings</h1>
      <div className="settings wrapper">
        <ul
          className="settings__nav"
          onClick={handleSwitchTab}
          onKeyDown={handleSwitchTab}
          role="tablist"
        >
          <li>
            <p>
              Appereance
              <br />
              <span>Dark and Light mode, Font size</span>
            </p>
          </li>
          <li>
            <p>
              Your Restaurant
              <br />
              <span>Dark and Light mode, Font size</span>
            </p>
          </li>
          <li className="active" data-tabno="3">
            <p>
              Products Management
              <br />
              <span>Manage your product, pricing, etc</span>
            </p>
          </li>
          <li>
            <p>
              Notifications
              <br />
              <span>Customize your notifications</span>
            </p>
          </li>
          <li>
            <p>
              Security
              <br />
              <span>Configure Password, PIN, etc</span>
            </p>
          </li>
          <li>
            <p>
              About Us
              <br />
              <span>Find out more about Posly</span>
            </p>
          </li>
        </ul>
        {tabs[tabToDisplay]}
      </div>
    </section>
  );
};

export default memo(Settings);
