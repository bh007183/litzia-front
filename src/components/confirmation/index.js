import React from "react";
import "./style.css";

function Confirmationemail() {
  return (
    <div className="container">
      <h2>Thank you for your order!</h2>
      <p>
        An email with the following order has been sent to a Litzia
        representative. <br></br>Please allow a few business days for the order
        to process. A representative will be in contact shortly to confirm the
        order.
      </p>
      <p>Kindest regards,</p>
      <p>Litzia Staff</p>
    </div>
  );
}

export default Confirmationemail;
