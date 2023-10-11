import React, { useEffect, useState } from "react";
import "./NeedGarson.css";
import { Container, Row, Col } from "reactstrap";
import Close from "../close.png";
import axios from "axios";
const NeedGarson = ({
  sefaresh3,
  sefaresh2,
  deletedetail,
  handleDeleteCard,
  showsefareshatdiv,
  changeColor1,
}) => {
  function handleDeleteCard() {
    deletedetail();
    showsefareshatdiv();
  }
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
  const handlechangestatus = async () => {
    await changestatus("checked");
    setButton("checked");
  };
  const handlechangestatus2 = async () => {
    await changestatus("not_checked");
    setButton("not_checked");
  };
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
          <p>نیاز به گارسون در میز {sefaresh2}</p>
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
              <button
                onClick={handlechangestatus}
                disabled={button === "checked"}

                // style={{
                //   backgroundColor: status === "sending" ? "green" : "white",
                // }}
              >
                رسیدگی شد
              </button>
            </Col>
            <Col lg="6" id="2">
              <button
                onClick={handlechangestatus2}
                disabled={button === "not_checked"}
              >
                نیاز به گارسون
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default NeedGarson;
