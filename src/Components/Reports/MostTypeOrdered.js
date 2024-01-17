import "./MostTypeOrdered.css";
import PiGraph from "./PiGraph";

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
      <PiGraph />
    </div>
  </div>
);

export default MostTypeOrdered;
