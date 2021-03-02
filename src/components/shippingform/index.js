import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import M from "materialize-css";
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

function ShippingForm() {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  }, []);

  const sendEmail = (event) => {
    console.log(event);
    axios
      .post("http://localhost:3005/nodemailer", {
        emailAddress: "bjhops17@gmail.com",
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="container" id="shipping-container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className="shipping-header">Shipping Address</h5>
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Ex. Kevin"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  placeholder="Ex. Lyons"
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 m6">
                <input
                  placeholder="Ex. 1234 Main St."
                  id="address"
                  type="text"
                  className="validate"
                />
                <label for="address">Address</label>
              </div>
              <div className="input-field col s12 m6">
                <input
                  id="apartment"
                  type="text"
                  className="validate"
                  placeholder="Ex. Apt 101"
                />
                <label for="apartment">Apartment (Optional)</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input
                  placeholder="Ex. Seattle"
                  id="city"
                  type="text"
                  className="validate"
                />
                <label for="city">City</label>
              </div>
              <div className="input-field col s12 m3">
                <select>
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="1">AL</option>
                  <option value="2">AK</option>
                  <option value="3">AZ</option>
                  <option value="4">AR</option>
                  <option value="5">CA</option>
                  <option value="6">CO</option>
                  <option value="7">CT</option>
                  <option value="8">DE</option>
                  <option value="9">FL</option>
                  <option value="10">GA</option>
                  <option value="11">HI</option>
                  <option value="12">ID</option>
                  <option value="13">IL</option>
                  <option value="14">IN</option>
                  <option value="15">IA</option>
                  <option value="16">KS</option>
                  <option value="17">KY</option>
                  <option value="18">LA</option>
                  <option value="19">ME</option>
                  <option value="20">MD</option>
                  <option value="21">MA</option>
                  <option value="22">MI</option>
                  <option value="23">MN</option>
                  <option value="24">MS</option>
                  <option value="25">MO</option>
                  <option value="26">MT</option>
                  <option value="27">NE</option>
                  <option value="28">NV</option>
                  <option value="29">NH</option>
                  <option value="30">NJ</option>
                  <option value="31">NM</option>
                  <option value="32">NY</option>
                  <option value="33">NC</option>
                  <option value="34">ND</option>
                  <option value="35">OH</option>
                  <option value="36">OK</option>
                  <option value="37">OR</option>
                  <option value="38">PA</option>
                  <option value="39">RI</option>
                  <option value="40">SC</option>
                  <option value="41">SD</option>
                  <option value="42">TN</option>
                  <option value="43">TX</option>
                  <option value="44">UT</option>
                  <option value="45">VT</option>
                  <option value="46">VA</option>
                  <option value="47">WA</option>
                  <option value="48">WV</option>
                  <option value="49">WI</option>
                  <option value="50">WY</option>
                </select>
                <label>Select State</label>
              </div>
              <div className="input-field col s12 m3">
                <input
                  id="zipcode"
                  type="number"
                  className="validate"
                  placeholder="Ex. 98007"
                />
                <label for="zipcode">Zipcode</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <h5 className="shipping-header">Contact Information</h5>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input id="email" type="text" className="validate" />
                <label for="email">Email</label>
              </div>
              <div className="input-field col s12 m6">
                <input id="phone-number" type="text" className="validate" />
                <label for="phone-number">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <p id="checkbox">
                  <label>
                    <input className="checkbox" type="checkbox" />
                    <span>Save as my billing address</span>
                  </label>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container" id="billing-container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className="billing-header">Billing Address</h5>
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Ex. Kevin"
                  id="billing-first_name"
                  type="text"
                  className="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="billing-last_name"
                  type="text"
                  className="validate"
                  placeholder="Ex. Lyons"
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 m6">
                <input
                  placeholder="Ex. 1234 Main St."
                  id="billing-address"
                  type="text"
                  className="validate"
                />
                <label for="address">Address</label>
              </div>
              <div className="input-field col s12 m6">
                <input
                  id="billing-apartment"
                  type="text"
                  className="validate"
                  placeholder="Ex. Apt 101"
                />
                <label for="apartment">Apartment (Optional)</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6">
                <input
                  placeholder="Ex. Seattle"
                  id="billing-city"
                  type="text"
                  className="validate"
                />
                <label for="city">City</label>
              </div>
              <div className="input-field col s12 m3">
                <select>
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="1">AL</option>
                  <option value="2">AK</option>
                  <option value="3">AZ</option>
                  <option value="4">AR</option>
                  <option value="5">CA</option>
                  <option value="6">CO</option>
                  <option value="7">CT</option>
                  <option value="8">DE</option>
                  <option value="9">FL</option>
                  <option value="10">GA</option>
                  <option value="11">HI</option>
                  <option value="12">ID</option>
                  <option value="13">IL</option>
                  <option value="14">IN</option>
                  <option value="15">IA</option>
                  <option value="16">KS</option>
                  <option value="17">KY</option>
                  <option value="18">LA</option>
                  <option value="19">ME</option>
                  <option value="20">MD</option>
                  <option value="21">MA</option>
                  <option value="22">MI</option>
                  <option value="23">MN</option>
                  <option value="24">MS</option>
                  <option value="25">MO</option>
                  <option value="26">MT</option>
                  <option value="27">NE</option>
                  <option value="28">NV</option>
                  <option value="29">NH</option>
                  <option value="30">NJ</option>
                  <option value="31">NM</option>
                  <option value="32">NY</option>
                  <option value="33">NC</option>
                  <option value="34">ND</option>
                  <option value="35">OH</option>
                  <option value="36">OK</option>
                  <option value="37">OR</option>
                  <option value="38">PA</option>
                  <option value="39">RI</option>
                  <option value="40">SC</option>
                  <option value="41">SD</option>
                  <option value="42">TN</option>
                  <option value="43">TX</option>
                  <option value="44">UT</option>
                  <option value="45">VT</option>
                  <option value="46">VA</option>
                  <option value="47">WA</option>
                  <option value="48">WV</option>
                  <option value="49">WI</option>
                  <option value="50">WY</option>
                </select>
                <label>Select State</label>
              </div>
              <div className="input-field col s12 m3">
                <input
                  id="billing-zipcode"
                  type="number"
                  className="validate"
                  placeholder="Ex. 98007"
                />
                <label for="zipcode">Zipcode</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container" id="button-container">
        <div className="row">
          <div className="col s12 m6" id="payment-button">
            <a onClick={sendEmail} className="waves-effect waves-light btn">
              Submit Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingForm;
