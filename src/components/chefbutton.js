import React from "react";
import "./chefbutton.css";
import { Container, Row, Col } from "reactstrap";
const Chefbutton = () => {
  return (
    <>
      <Col lg="3">
        {" "}
        <button className="Bc1" style={{}}>
          لغو شد
        </button>
      </Col>
      <Col lg="3">
        <button className="Bc2" style={{}}>
          تمام شد
        </button>
      </Col>
      <Col lg="3">
        <button
          className="Bc3"
          style={{}}
          //  onClick={}
        >
          آماده شد
        </button>
      </Col>
      <Col lg="3">
        <button className="Bc4" style={{}}>
          سفارش جدید
        </button>
      </Col>
    </>
  );
};
export default Chefbutton;
