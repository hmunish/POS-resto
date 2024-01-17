import img from "../../images/item-1.png";
import "./MostOrdered.css";

const MostOrdered = () => (
  <div id="most__ordered">
    <div className="most__ordered__wrapper">
      <h3>Most Ordered</h3>
      <select className="most__ordered">
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="past">Past</option>
      </select>
    </div>
    <ul className="most__ordered">
      <li className="most__ordered">
        <img src={img} alt="item" className="most__ordered__details" />
        <div className="most__ordered__details">
          <h4 className="most__ordered__details">
            Spicy seasoned seafood noodles
          </h4>
          <p className="most__ordered__details">200 dishes ordered</p>
        </div>
      </li>
      <li className="most__ordered">
        <img src={img} alt="item" className="most__ordered__details" />
        <div className="most__ordered__details">
          <h4 className="most__ordered__details">
            Spicy seasoned seafood noodles
          </h4>
          <p className="most__ordered__details">200 dishes ordered</p>
        </div>
      </li>
      <li className="most__ordered">
        <img src={img} alt="item" className="most__ordered__details" />
        <div className="most__ordered__details">
          <h4 className="most__ordered__details">
            Spicy seasoned seafood noodles
          </h4>
          <p className="most__ordered__details">200 dishes ordered</p>
        </div>
      </li>
    </ul>
    <button type="button" className="most__ordered">
      View All
    </button>
  </div>
);

export default MostOrdered;
