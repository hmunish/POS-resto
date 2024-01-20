import { memo } from "react";
import "./PiGraph.css";

const PiGraph = () => (
  <div className="pi_graph_wrapper">
    <div id="pi_graph">
      <div className="pi_graph_circle one" />
      <div className="pi_graph_circle two" />
      <div className="pi_graph_circle three" />
      <div className="pi_graph_circle four" />
      <div className="pi_graph_circle five" />
      <div className="pi_graph_circle six" />
    </div>
  </div>
);

export default memo(PiGraph);
