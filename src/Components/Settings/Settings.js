import ManageProduct from "./ManageProduct";
import "./Settings.css";

const Settings = () => (
  <section className="settings">
    <h1 className="settings">Settings</h1>
    <div className="settings wrapper">
      <ul className="settings__nav">
        <li>
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
        <li className="active">
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
        <li>
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
        <li>
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
        <li>
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
        <li>
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
        <li>
          <p>
            Appereance
            <br />
            <span>Dark and Light mode, Font size</span>
          </p>
        </li>
      </ul>
      <ManageProduct />
    </div>
  </section>
);

export default Settings;
