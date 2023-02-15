import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Contact extends Component {
  render() {
    return (
      <div class="w3-content w3-container w3-padding-64" id="contact">
        <h2 class="w3-center">FIND US</h2>
        <div class="w3-row w3-padding-32 w3-section">
          <div class="w3-col m4 w3-container">
            <img src="images/FBCArial.png" class="w3-image w3-round" style="width:100%" />
          </div>
          <div class="w3-col m8 w3-panel">
            <div class="w3-large w3-margin-bottom">
              <p>Sunday Service at 10:00 am</p>
              <p>1201 25th Avenue South, St. Cloud, MN 56302</p>
              <p>Phone: +320-259-9129</p>
              <p>Email: rosstreadwayfbc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;