import React from "react";
import "./regionuser.css";
const Regionuser = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-100px",
        width: "100%",
      }}
    >
      <div className="addclientdiv">
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "rgb(10, 110, 110)  ",
            textAlign: "center",
          }}
        >
          انتخاب محدوده خدماتی کاربر
        </p>
        <div style={{ marginRight: "10px", marginTop: "20px" }}>
          <label style={{ marginLeft: "10px" }}>میز:</label>
          <input className="inputTable"></input>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <button
            style={{
              width: "300px",
              height: "40px",
              marginTop: "50px",
              borderRadius: "10px",
              backgroundColor: "#00b4d8",
              color: "white",
            }}
          >
            ویرایش با انتخابگر
          </button>
        </div>
        <hr></hr>
        <div style={{ marginTop: "30px", marginRight: "10px" }}>
          <lable>میز شماره 1</lable>
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              alignitems: "center",
              minheight: "100vh",
            }}
          ></input>

          <lable>میز شماره 2</lable>
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              alignitems: "center",
              minheight: "100vh",
            }}
          ></input>

          <lable>میز شماره 3</lable>
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              alignitems: "center",
              minheight: "100vh",
            }}
          ></input>

          <lable>میز شماره 4</lable>
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              alignitems: "center",
              minheight: "100vh",
            }}
          ></input>

          <lable>میز شماره 5</lable>
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              alignitems: "center",
              minheight: "100vh",
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Regionuser;
