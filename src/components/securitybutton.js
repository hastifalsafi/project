import React from "react";
import "./securitybutton.css";
import { Container, Row, Col } from "reactstrap";
const Securitybutton = () => {
  return (
    <>
      <Col lg="2">
        {" "}
        <button className="Bs1">سفارش جدید</button>
      </Col>
      <Col lg="2">
        <button className="Bs2" style={{}}>
          تحویل داده شده
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bs3"
          style={{}}
          //  onClick={}
        >
          تمام شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bs4"
          style={{}}
          // onClick={}
        >
          لغو شد
        </button>
      </Col>
      <Col lg="2">
        <button className="Bs5" style={{}}>
          آماده شد
        </button>
      </Col>
    </>
  );
};
export default Securitybutton;
