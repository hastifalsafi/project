import React, { useEffect, useState } from "react";
import axios from "axios";
import "./securitybutton.css";
import { Container, Row, Col } from "reactstrap";
const Securitybutton = ({ sefaresh3, changeColor1 }) => {
  useEffect(() => {
    setButton(changeColor1);
  }, [changeColor1]);
  const [button, setButton] = useState("");
  let accessToken =
    "U2FsdGVkX19P75ly3tjD2UhO5d+G8KYDzl5HolbKsAhtuTITuHL+K/r2j8eyVSiafccy1MmmzNC9ezEeVx222WXqsdRRC1y2q5LaBNFmcXUjQjt8gGHwEY6MayTkgST0ev8TVffS2rA4CoJfFnv6vSKU4mNXDKel287K7jTyQiHzoxNlch13L+7LMJqtCUzWNfzgoAIyykm6B5CXZrwlOl5gQwkwkJYueZgr1sLdxJyDHnpDq7DEVq4hpK481G8ThQBdYKqWn9brIgTUu5iB2fMClX9JdoiUVI7AwXfEWg54Zgg8XusnnWg0t35Z0grznHq2JmNpzKY7Ny0OlHVjqZ+MSbc4yeo/VIunXacPD/P5iC0Oqgc74/WuoMO68VWd4eD02v++uUMrx1xLs+AvOO1NW8/DhYM9Fa7oj4WVupIhQXxl3Ih+XevsaNULjQjGUGKCUGo/xUINuD1zphvDhho5ynrvFEvlI1NoDN4Za7Rj14D2UhMzKmqRwffa6UNhpQqXMRGAjAUJnbKqvMTd9BQqpBziu7E5zaJoAzniDCiQl/Ttdqc6Z+IW7TMjVVRgSWhLNgW3SKlL/4yb01QTv5YvrKkEaKM/3j0YMiBH0YqSunmqddM99YQq1TjJKH2yU332PsglXnV0VQWxg1GmcxbrsC2VwotJhAcP4YOZL607yBZ3HKfci8OxeKdpbRgakTENUy8KW0fs45tHO9Z99fgOtJtMv7IekOpLHucQAnHBt6s47T+02hBTEMH+HbylkJ0IDRqSk18Ik2cfj5hrcW5bivMZOOO8ipJ6AU4OuRlqSxY8cPNhczHk5aEQvVpD";

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
        <button className="Bs1">سفارش جدید</button>
      </Col>
      <Col lg="2">
        <button
          className="Bs2"
          onClick={handlechangestatusD}
          disabled={button === "delivered"}
        >
          تحویل داده شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bs3"
          onClick={handlechangestatusE}
          disabled={button === "ended"}
        >
          تمام شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bs4"
          onClick={handlechangestatusC}
          disabled={button === "canceled"}
        >
          لغو شد
        </button>
      </Col>
      <Col lg="2">
        <button
          className="Bs5"
          onClick={handlechangestatusR}
          disabled={button === "ready"}
        >
          آماده شد
        </button>
      </Col>
    </>
  );
};
export default Securitybutton;
