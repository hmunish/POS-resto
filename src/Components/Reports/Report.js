import "./Report.css";
import { memo } from "react";
import img1 from "../../images/avatar_1.png";
import img2 from "../../images/avatar_2.png";
import img3 from "../../images/avatar_3.png";

const Report = () => (
  <div id="report">
    <div id="report_header">
      <h3>Order Report</h3>
      <select>
        <option>Filter Order</option>
      </select>
    </div>
    <div id="order_report_table_wrapper">
      <table id="order_report_table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Menu</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="report_cust_name">
                <img src={img1} alt="customer" />
                {' '}
                Eren Jaegar
              </span>
            </td>
            <td>Spicy seasoned seafood noodles </td>
            <td>$125</td>
            <td>
              <span className="report_order_status completed">Completed</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="report_cust_name">
                <img src={img2} alt="customer" />
                {' '}
                Eren Jaegar
              </span>
            </td>
            <td>Spicy seasoned seafood noodles </td>
            <td>$125</td>
            <td>
              <span className="report_order_status preparing">Preparing</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="report_cust_name">
                <img src={img3} alt="customer" />
                {' '}
                Eren Jaegar
              </span>
            </td>
            <td>Spicy seasoned seafood noodles </td>
            <td>$125</td>
            <td>
              <span className="report_order_status pending">Pending</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="report_cust_name">
                <img src={img1} alt="customer" />
                {' '}
                Eren Jaegar
              </span>
            </td>
            <td>Spicy seasoned seafood noodles </td>
            <td>$125</td>
            <td>
              <span className="report_order_status completed">Completed</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="report_cust_name">
                <img src={img1} alt="custome" />
                {' '}
                Eren Jaegar
              </span>
            </td>
            <td>Spicy seasoned seafood noodles </td>
            <td>$125</td>
            <td>
              <span className="report_order_status completed">Completed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default memo(Report);
