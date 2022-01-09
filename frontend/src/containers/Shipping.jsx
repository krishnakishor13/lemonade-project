import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../API";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchCarts } from "../reducks/carts/operations";
import { addOrder } from "../reducks/order/operations";
import { push } from "connected-react-router";
const api = new API();

const Shipping = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const subtotal = getSubtotal(selector);
  const carts = getCarts(selector);

  const [full_name, setFullName] = useState(""),
    [phone, setPhone] = useState(""),
    [address, setAddress] = useState(""),
    [pincode, setPincode] = useState(""),
    [apt, setApt] = useState(""),
    [city, setCity] = useState(""),
    [state, setState] = useState(""),
    [totalitem, setTotalItem] = useState(0);

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  useEffect(() => {
    let arr = [];
    if (carts != undefined && carts.length > 0) {
      for (let key in carts) {
        arr.push(carts[key].quantity);
      }
      let sum = arr.reduce(function (a, b) {
        return a + b;
      }, 0);
      setTotalItem(sum);
    }
  }, [carts]);

  const inputFullname = (e) => {
    setFullName(e.target.value);
  };

  const inputPhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const inputAddress = (e) => {
    setAddress(e.target.value);
  };

  const inputPin = (e) => {
    setPincode(e.target.value);
  };

  const inputHouse = (e) => {
    setApt(e.target.value);
  };

  const inputCity = (e) => {
    setCity(e.target.value);
  };

  const inputState = (e) => {
    setState(e.target.value);
  };

  const orderButton = (e) => {
    let params = {
      total_price: subtotal,
      full_name: full_name,
      address_line1: address,
      address_line2: apt,
      city: city,
      state: state,
      postal_code: pincode,
      country: "US",
      telephone: phone,
    };
    dispatch(addOrder(params));
    e.preventDefault();
    dispatch(push("Thankyou"));
  };

  return (
    <>
      <section class="order">
        <div class="heading">
          <p>-Order your Items-</p>
        </div>
      </section>
      <br />

      <section>
        <div class="form">
          <div class="total">
            <h3>Shipment Details</h3>
            <br />
            <p>Please Check Your Item and Confirm it</p>
          </div>
          <br />
          <div class="order1">
            <table>
            {carts &&
              carts.map((cart) => (
                <tr>
                  <td class="item-name">{cart.item.name}</td>
                  <td class="quantity">{cart.quantity}</td>
                  <td class="item-price">{cart.item.price}</td>
               </tr>
              ))}
          <tr class="order2">
            <td>Total price</td>
            <td>{totalitem}</td>
            <td>${subtotal}</td>
          </tr>
          <br />
         </table>
      </div>
          <label for="name">Full Name</label>
          <br />
          <input
            type="text"
            id="name"
            required
            placeholder="Enter Recipient's Name"
            onChange={inputFullname}
          />
          <br />

          <br />
          <label for="number">Phone Number</label>
          <br />
          <input
            type="text"
            id="number"
            required
            placeholder="Enter Phone Number"
            onChange={inputPhoneNumber}
          />
          <br />

          <br />
          <label for="address">Street address or P.O. Box</label>
          <br />
          <input
            type="text"
            id="address"
            required
            placeholder="Enter Street address or P.O. Box"
            onChange={inputAddress}
          />
          <br />

          <br />
          <label for="code">PIN Code</label>
          <br />
          <input
            type="text"
            id="code"
            required
            placeholder="Enter PIN Code"
            onChange={inputPin}
          />
          <br />

          <br />
          <label for="house">Apt, suite, unit, building, floor, etc.</label>
          <br />
          <input
            type="text"
            id="house"
            required
            placeholder="Enter Apt, suite, unit, building, floor, etc."
            onChange={inputHouse}
          />
          <br />

          <br />
          <label for="city">City</label>
          <br />
          <input
            type="text"
            id="city"
            required
            placeholder="Enter City"
            onChange={inputCity}
          />
          <br />

          <br />
          <label for="state">State</label>
          <br />
          <input
            type="text"
            id="state"
            required
            placeholder="Enter State"
            onChange={inputState}
          />
          <br />
          <a href="/">
            <button onClick={orderButton}>SUBMIT</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Shipping;
