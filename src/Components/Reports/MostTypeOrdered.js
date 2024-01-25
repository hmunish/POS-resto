import { memo } from "react";
import piGraphImg from "../../images/Circle.png";
import "./MostTypeOrdered.css";
// import PiGraph from "./PiGraph";

const MostTypeOrdered = () => (
  <div id="most__type__ordered">
    <div className="most__ordered__wrapper type">
      <h3>Most Ordered</h3>
      <select className="most__ordered">
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="past">Past</option>
      </select>
    </div>
    <div id="most_ordered_pi_graph_wrapper">
      <img src={piGraphImg} alt="PiGraph" />
      <ul className="most__type__ordered__graph">
        <li>
          Dine In
          <br />
          <span>200 Customers</span>
        </li>
        <li>
          To Go
          <br />
          <span>122 Customers</span>
        </li>
        <li>
          Delivery
          <br />
          <span>264 Customers</span>
        </li>
      </ul>
    </div>
  </div>
);

export default memo(MostTypeOrdered);
