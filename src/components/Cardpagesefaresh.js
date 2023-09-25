import "./Cardpagesefaresh.css";
import Clickcardpagesefaresh from "./Clickcardpagesefaresh";
import { useState } from "react";
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
  return (
    <div
      onClick={handleclick}
      className="maincard"
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
            ? "orange"
            : changeColor1 === "ready"
            ? "white"
            : changeColor1 === "sending"
            ? "green"
            : changeColor1 === "needGarson"
            ? "brown"
            : changeColor1 === "checked"
            ? "yellow"
            : changeColor1 === "ended"
            ? "red"
            : changeColor1 === "not_checked"
            ? "red"
            : changeColor1 === "checked"
            ? "white"
            : "",
        // canceled
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
