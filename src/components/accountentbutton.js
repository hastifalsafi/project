import React from "react";
import "./accountentbutton.css";
import { Container, Row, Col } from "reactstrap";
const Accountentbutton = () => {
  return (
    <>
      <Col lg="2">
        {" "}
        <button className="Ba1">سفارش جدید</button>
      </Col>
      <Col lg="2">
        <button className="Ba2" style={{}}>
          تحویل داده شده
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Ba3"
          style={{}}
          // onClick={}
        >
          پرداخت شده
        </button>
      </Col>
      <Col lg="2">
        <button className="Ba4" style={{}}>
          تمام شد
        </button>
      </Col>
      <Col lg="2">
        <button className="Ba5" style={{}}>
          لغو شد
        </button>
      </Col>
      <Col lg="2">
        <button className="Ba6" style={{}}>
          آماده شد
        </button>
      </Col>
    </>
  );
};
export default Accountentbutton;
