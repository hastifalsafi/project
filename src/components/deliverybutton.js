import React from "react";
import "./deliverybutton.css";
import { Container, Row, Col } from "reactstrap";
const Deliverybutton = () => {
  return (
    <>
      <Col lg="2">
        {" "}
        <button className="Bd1">سفارش جدید</button>
      </Col>
      <Col lg="2">
        <button
          className="Bd2"
          style={{}}
          //  onClick={}
        >
          در حال ارسال
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bd3"
          style={{}}
          // onClick={}
        >
          تمام شد
        </button>
      </Col>
      <Col lg="2">
        <button className="Bd4" style={{}}>
          آماده شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bd5"
          style={{}}
          // onClick={}
        >
          لغو شد
        </button>
      </Col>
    </>
  );
};
export default Deliverybutton;
