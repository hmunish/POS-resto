import {
  FaArrowLeft,
  FaCreditCard,
  FaMoneyBill,
  FaPaypal,
} from "react-icons/fa";
import "./Payment.css";

const Payment = ({ backToCart }) => (
  <div id="payment">
    <FaArrowLeft onClick={() => backToCart(false)} />
    <div id="payment_header">
      <h1>Payment</h1>
      <p>3 payment method available</p>
    </div>
    <form id="payment_details_wrapper">
      <div className="payment_fields_wrapper">
        <h3>Payment Method</h3>
        <div id="payment_methods_wrapper">
          <label htmlFor="credit_card" className="payment_method_label">
            <FaCreditCard />
            Credit Card
            <input
              type="radio"
              id="credit_card"
              name="payment_method"
              value="credit_card"
            />
          </label>
          <label htmlFor="paypal" className="payment_method_label">
            <FaPaypal />
            Paypal
            <input
              type="radio"
              id="paypal"
              name="payment_method"
              value="paypal"
            />
          </label>
          <label htmlFor="cash" className="payment_method_label">
            <FaMoneyBill />
            Cash
            <input type="radio" id="cash" name="payment_method" value="cash" />
          </label>
        </div>
      </div>
      <div id="payment_text_fields_wrapper">
        <div className="payment_fields_wrapper">
          <label htmlFor="user_name">Cardholder Name</label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Levi Ackerman"
            className="payment_inputs"
          />
        </div>
        <div className="payment_fields_wrapper">
          <label htmlFor="user_name">Card Number</label>
          <input
            id="card_number"
            type="tel"
            pattern="\d*"
            name="card_number"
            placeholder="2564 1421 0897 1244"
            className="payment_inputs"
          />
        </div>
        <div className="payments_double_fields">
          <div className="payment_fields_wrapper">
            <label htmlFor="card_expiration_date">Expiration Date</label>
            <input
              id="card_expiration_date"
              type="tel"
              pattern="\d*"
              maxLength="7"
              name="card_expiration_date"
              placeholder="02/2022"
              className="payment_inputs"
            />
          </div>
          <div className="payment_fields_wrapper">
            <label htmlFor="user_name">CVV</label>
            <input
              id="cvv"
              type="tel"
              name="cvv"
              pattern="\d*"
              maxLength="4"
              placeholder="CVV"
              className="payment_inputs"
            />
          </div>
        </div>
        <div className="payments_double_fields">
          <div className="payment_fields_wrapper">
            <label htmlFor="order_type">Order Type</label>
            {/* <input
              id="card_expiration_date"
              type="tel"
              pattern="\d*"
              maxLength="7"
              name="card_expiration_date"
              placeholder="02/2022"
              className="payment_inputs"
            /> */}
            <select id="order_type" className="payment_inputs">
              <option value="dine_in">Dine In</option>
              <option value="to_go">To Go</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          <div className="payment_fields_wrapper">
            <label htmlFor="user_name">Table no.</label>
            <input
              id="table_no"
              type="phone"
              name="table_no"
              placeholder="140"
              className="payment_inputs"
            />
          </div>
        </div>
      </div>
      <div id="payment__actions__wrapper">
        <input
          type="button"
          value="Cancel"
          id="cancel_payment"
          onClick={() => backToCart(false)}
        />
        <input type="submit" value="Confirm Payment" id="confirm_payment" />
      </div>
    </form>
  </div>
);

export default Payment;
