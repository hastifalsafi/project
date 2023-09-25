import React, { useEffect, useState } from "react";
import "./NeedGarson.css";
import { Container, Row, Col } from "reactstrap";
import Close from "../close.png";
import axios from "axios";
const baseurl = "https://digitalorderback.iran.liara.run/api/v1/get-all-orders";
const NeedGarson = ({
  sefaresh2,
  deletedetail,
  handleDeleteCard,
  showsefareshatdiv,
  key,
}) => {
  useEffect(() => {
    const interval = setInterval(changestatus, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function handleDeleteCard() {
    deletedetail();
    showsefareshatdiv();
  }
  let accessToken =
    "U2FsdGVkX19P75ly3tjD2UhO5d+G8KYDzl5HolbKsAhtuTITuHL+K/r2j8eyVSiafccy1MmmzNC9ezEeVx222WXqsdRRC1y2q5LaBNFmcXUjQjt8gGHwEY6MayTkgST0ev8TVffS2rA4CoJfFnv6vSKU4mNXDKel287K7jTyQiHzoxNlch13L+7LMJqtCUzWNfzgoAIyykm6B5CXZrwlOl5gQwkwkJYueZgr1sLdxJyDHnpDq7DEVq4hpK481G8ThQBdYKqWn9brIgTUu5iB2fMClX9JdoiUVI7AwXfEWg54Zgg8XusnnWg0t35Z0grznHq2JmNpzKY7Ny0OlHVjqZ+MSbc4yeo/VIunXacPD/P5iC0Oqgc74/WuoMO68VWd4eD02v++uUMrx1xLs+AvOO1NW8/DhYM9Fa7oj4WVupIhQXxl3Ih+XevsaNULjQjGUGKCUGo/xUINuD1zphvDhho5ynrvFEvlI1NoDN4Za7Rj14D2UhMzKmqRwffa6UNhpQqXMRGAjAUJnbKqvMTd9BQqpBziu7E5zaJoAzniDCiQl/Ttdqc6Z+IW7TMjVVRgSWhLNgW3SKlL/4yb01QTv5YvrKkEaKM/3j0YMiBH0YqSunmqddM99YQq1TjJKH2yU332PsglXnV0VQWxg1GmcxbrsC2VwotJhAcP4YOZL607yBZ3HKfci8OxeKdpbRgakTENUy8KW0fs45tHO9Z99fgOtJtMv7IekOpLHucQAnHBt6s47T+02hBTEMH+HbylkJ0IDRqSk18Ik2cfj5hrcW5bivMZOOO8ipJ6AU4OuRlqSxY8cPNhczHk5aEQvVpD";
  const [status, setStatus] = useState({});
  const changestatus = () => {
    fetch(
      "https://digitalorderback.iran.liara.run/api/v1/edit-order/633134c3028d6bda2f983452",
      {
        method: "POST",
        body: JSON.stringify({ status }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };
  const handlechangestatus = () => {
    setStatus("sending");
    changestatus();
  };
  const handlechangestatus2 = () => {
    setStatus("checked");
    changestatus();
  };
  if (status === "not_checked") {
    document.getElementById("1").style.backgroundColor = "pink";
  } else if (status === "ready") {
    document.getElementById("2").style.backgroundColor = "blue";
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="card"
        // style={{
        //   width: "90%",
        //   padding: "",
        //   height: "90%",
        //   marginLeft: "auto",
        //   marginRight: "auto",
        //   borderRadius: "20px",
        //   border: "1px solid black ",
        // }}
      >
        <div className="needgarson">
          <div onClick={handleDeleteCard}>
            <img
              src={Close}
              style={{
                height: "24px",
                width: "24px",
                marginRight: "0px",
                marginBottom: "0px",
              }}
            ></img>
          </div>
          <p>نیاز به گارسون در میز {sefaresh2} </p>
        </div>
        <div className="status">
          <p className="statusp"> وضعیت سفارش: </p>
        </div>
        <div className="fatherbutton">
          <Row
            style={{
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Col lg="6" id="1">
              <button onClick={handlechangestatus}>رسیدگی شد</button>
            </Col>
            <Col lg="6" id="2">
              <button onClick={handlechangestatus2}>نیاز به گارسون</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default NeedGarson;
