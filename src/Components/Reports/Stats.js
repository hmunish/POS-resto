import "./Stats.css";

import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaDollarSign,
  FaRegBookmark,
  FaUsers,
} from "react-icons/fa";

const Stats = () => (
  <div id="stats">
    <div className="stat">
      <div className="stat__icon__wrapper">
        <div className="stat__icon">
          <FaDollarSign style={{ color: "var(--clr-3)" }} />
        </div>
        <p className="stat__percentage" style={{ color: "var(--clr-6)" }}>
          +32.40%
        </p>
        <FaArrowCircleUp style={{ color: "var(--clr-6)" }} />
      </div>
      <h2 className="stat__amount">$10,243.00</h2>
      <p className="stat__descp">Total Revenue</p>
    </div>
    <div className="stat">
      <div className="stat__icon__wrapper">
        <div className="stat__icon">
          <FaRegBookmark style={{ color: "var(--clr-4)" }} />
        </div>
        <p className="stat__percentage" style={{ color: "var(--clr-2)" }}>
          -12.40%
        </p>
        <FaArrowCircleDown style={{ color: "var(--clr-2)" }} />
      </div>
      <h2 className="stat__amount">23,456</h2>
      <p className="stat__descp">Total Dish Ordered</p>
    </div>
    <div className="stat">
      <div className="stat__icon__wrapper">
        <div className="stat__icon">
          <FaUsers style={{ color: "var(--clr-5)" }} />
        </div>
        <p className="stat__percentage" style={{ color: "var(--clr-6)" }}>
          +2.40%
        </p>
        <FaArrowCircleUp style={{ color: "var(--clr-6)" }} />
      </div>
      <h2 className="stat__amount">1,234</h2>
      <p className="stat__descp">Total Customer</p>
    </div>
  </div>
);

export default Stats;
