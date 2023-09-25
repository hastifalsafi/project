import React, { useEffect } from "react";
import "./garsonbutton.css";
import { Container, Row, Col } from "reactstrap";
import "./garsonbuttonstyle.js";
const Garsonbutton = ({ changeColor1 }) => {
  useEffect(() => {
    if (changeColor1 === "new_order") {
      document.getElementById("prev").style.backgroundColor = "#3498db";
      document.getElementById("prev").style.borderColor = "#3498db";
      // document.getElementById("prevline").style.borderTop = "3px solid #3498db";
    }
  }, []);
  return (
    <>
      <Col lg="2" md="2" sm="2" xs="2">
        {" "}
        {/* <button className="Bg1" style={{}}>
          لغو شد
        </button> */}
        <div class="circle active,btn" disabled id="prev"></div>
        <div className="line" id="prevline"></div>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        {/* <button className="Bg2" style={{}}>
          آماده شد
        </button> */}

        <div class="circle" id="next"></div>
        <div className="line" id="nextline"></div>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        {/* <button className="Bg3" style={{}}>
          تمام شد
        </button> */}
        <div class="circle" id="third"></div>
        <div className="line" id="thirdline"></div>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        {/* <button
          className="Bg4"
          style={{}}
          // onClick={}
        >
          تحویل داده شد
        </button> */}
        <div class="circle" id="fourth"></div>
        <div className="line" id="fourthline"></div>
      </Col>
      <Col lg="2" md="2" sm="2" xs="2">
        {/* <button className="Bg5" style={{}}>
          سفارش جدید
        </button> */}
        <div class="circle" id="fiveth"></div>
      </Col>
    </>
  );
};
export default Garsonbutton;
