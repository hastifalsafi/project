import "./Cardpagesefaresh.css";
import Clickcardpagesefaresh from "./Clickcardpagesefaresh";
import { useEffect, useState } from "react";
import React from "react";
import Modal from "react-modal";
// import Modalmobile from "./modal";
import { useMediaQuery } from "react-responsive";
const Cardpagesefaresh = ({
  sefaresh,
  showDetail,
  order,
  timeOnly,
  tablenumber,
  sefareshattt,
  changeColor1,
  openModal,
  type,
  isMobile,
  mobilee,
  ispaid,
  key,
}) => {
  // const words = sefaresh.description
  // .split(" ")
  // .slice(0, 5)
  // .join(" ");
  const handleclick = () => {
    showDetail(sefaresh);
    openModal();
    if (isMobile) {
      mobilee();
    }
  };
  // useEffect(() => {
  //   if (changeColor1 === "checked") {
  //     document.getElementById("11").style.backgroundColor = "blue";
  //   } else if (changeColor1 === "new_order") {
  //     document.getElementById("11").style.backgroundColor = "orange";
  //   } else if (changeColor1 === "ready") {
  //     document.getElementById("11").style.backgroundColor = "blue";
  //   } else {
  //     document.getElementById("11").style.backgroundColor = "yellow";
  //   }
  // }, [changeColor1]);
  return (
    <div
      onClick={handleclick}
      className="maincard"
      id="11"
      style={{
        width: "90%",
        height: "120px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        borderRadius: "20px",
        padding: "5px",
        backgroundColor:
          changeColor1 === "new_order"
            ? "#ed7434"
            : changeColor1 === "ready"
            ? "#f3cf79"
            : changeColor1 === "sending"
            ? "#118ab2"
            : changeColor1 === "checked"
            ? "#a3b18a"
            : changeColor1 === "ended"
            ? "white"
            : changeColor1 === "not_checked"
            ? "red"
            : changeColor1 === "delivered"
            ? "#4fc0e8"
            : changeColor1 === "canceled"
            ? "#bf3545"
            : changeColor1 === "needgarson"
            ? "#e63946"
            : "",
      }}
    >
      <div style={{ display: "flex" }}>
        <p>
          شماره سفارش : <span>{order}</span>
        </p>
        <p style={{ marginRight: "60px" }}>
          ساعت سفارش:
          <span>{timeOnly}</span>
        </p>
        <p>
          {ispaid === false ? (
            <div style={{ color: "red" }}>پرداخت نشده</div>
          ) : ispaid === true ? (
            <div>پرداخت شده</div>
          ) : (
            <div></div>
          )}
        </p>
        {type === "pickup" ? (
          <div></div>
        ) : type === "table_ordering" ? (
          <p>
            {" "}
            شماره میز: <div>{sefaresh.table}</div>
          </p>
        ) : type === "dine_in" ? (
          <p style={{}}>
            شماره میز :<span>{sefaresh.table}</span>
          </p>
        ) : (
          <div></div>
        )}
      </div>
      <p style={{ direction: "rtl" }}>
        خلاصه سفارش:
        <span>
          {" "}
          {sefareshattt.map((items) => (
            <span key={items.id}>
              {" "}
              {} {items.service.faName.split("").slice(0, 10).join("")}{" "}
            </span>
          ))}
        </span>
      </p>
    </div>
  );
};

export default Cardpagesefaresh;
