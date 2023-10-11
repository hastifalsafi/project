import React, { useEffect, useState } from "react";
import axios from "axios";
import "./accountentbutton.css";
import { Container, Row, Col } from "reactstrap";
const Accountentbutton = () => {
  useEffect(() => {
    setButton(changeColor1);
  }, [changeColor1]);
  const [button, setButton] = useState("");
    const accessToken = localStorage.getItem("accessToken");

  async function changestatus(status) {
    try {
      const response = await axios.post(
        `https://digitalorderback.iran.liara.run/api/v1/edit-order/${sefaresh3}`,
        { status },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      setButton(changeColor1);
    } catch (error) {
      console.error(error);
    }
  }
  const handlechangestatusD = async () => {
    await changestatus("delivered");
    setButton("deliverd");
  };
  const handlechangestatusC = async () => {
    await changestatus("canceled");
    setButton("canceld");
  };
  const handlechangestatusE = async () => {
    await changestatus("ended");
    setButton("ended");
  };
  const handlechangestatusR = async () => {
    await changestatus("ready");
    setButton("ready");
  };
  return (
    <>
      <Col lg="2">
        {" "}
        <button className="Ba1">سفارش جدید</button>
      </Col>
      <Col lg="2">
        <button
          className="Ba2"
          onClick={handlechangestatusD}
          disabled={button === "delivered"}
        >
          تحویل داده شد
        </button>
      </Col>
      <Col lg="2">
        <button className="Ba3">پرداخت شد</button>
      </Col>
      <Col lg="2">
        <button
          className="Ba4"
          onClick={handlechangestatusE}
          disabled={button === "ended"}
        >
          تمام شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Ba5"
          onClick={handlechangestatusC}
          disabled={button === "canceled"}
        >
          لغو شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Ba6"
          onClick={handlechangestatusR}
          disabled={button === "ready"}
        >
          آماده شد
        </button>
      </Col>
    </>
  );
};
export default Accountentbutton;
