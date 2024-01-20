import { memo } from "react";
import Header from "./Header";
import MostOrdered from "./MostOrdered";
import MostTypeOrdered from "./MostTypeOrdered";
import Report from "./Report";
import "./ReportsContainer.css";
import Stats from "./Stats";

const ReportsContainer = () => (
  <section id="reports_container">
    <div id="reports_container_left_wrapper">
      <Header title="Dashboard" />
      <Stats />
      <Report />
    </div>
    <div id="reports_container_right_wrapper">
      <MostOrdered />
      <MostTypeOrdered />
    </div>
  </section>
);

export default memo(ReportsContainer);
