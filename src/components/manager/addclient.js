import React from "react";
import "./addclient.css";
import addClient from "./add-user.png";
import { Container, Row, Col } from "reactstrap";
const Addclient = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "-100px",
        width: "100%",
      }}
    >
      <div className="addclientdiv">
        <div className="cloud">
          <p
            style={{
              float: "left",
              marginRight: "-65px",
              marginTop: "20px",
              fontSize: "14px",
              color: "rgb(10, 110, 110)  ",
            }}
          >
            ویرایش اطلاعات کاربر
          </p>
        </div>
        <Row>
          <Col lg="6">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <label class="input ">
                <input
                  className="input__field  "
                  type="text"
                  placeholder="هستی فلسفی "
                  style={{ fontSize: "14px" }}
                />
                <span class="input__label">نام و نام خانوادگی </span>
              </label>
            </div>
          </Col>
          <Col lg="6">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <label class="input2 ">
                <input
                  className="input__field2 "
                  type="password"
                  placeholder="12345678910  "
                  style={{ fontSize: "14px", justifyContent: "space-around" }}
                />
                <span class="input__label2"> رمز عبور </span>
              </label>
            </div>
          </Col>
        </Row>
        <div>
          <p className="delete">حذف</p>
          <p style={{ cursor: "progress" }} className="add">
            ذخیره
          </p>
        </div>
      </div>
    </div>
  );
};
export default Addclient;
