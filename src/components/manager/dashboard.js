import React from "react";
import "./dashboard.css";
import addClient from "./add-user.png";
import addFood from "./dining.png";
import selectJob from "./dinner-table.png";
import { Action_type } from "../../factsAction";
import { useDispatch, useSelector } from "react-redux";
import { addclientredux } from "./../../../src/store";
import { useMediaQuery } from "react-responsive";
import { Menu, Dropdown, Collapse, CollapseProps } from "antd";
import { Panel } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import Icon from "antd/es/icon";
const Dashboard = (props) => {
  const dispatch = useDispatch();
  const addclientonclick = () => {
    dispatch(addclientredux({ type: Action_type.add_client }));
  };
  const text = ` A dog is a type of domesticated animal. Known for its
  loyalty and faithfulness, it can be found as a welcome guest in many
  households across the world. `;
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];
  const { Panel } = Collapse;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div>
      <>
        <div class="dashboard">
          <div class="dashboard-nav">
            <header>
              <a class="menu-toggle">
                <i class="fas fa-bars"></i>
              </a>
              <a class="brand-logo">
                <i class="fas fa-anchor"></i> <span>پنل مدیریت</span>
              </a>
            </header>

            <nav class="dashboard-nav-list">
              <a class="dashboard-nav-item">
                <Collapse
                  bordered={false}
                  border={false}
                  style={{
                    width: "100%",
                    float: "left",
                    backgroundColor: "#f1faee",
                  }}
                  expandIconPosition="right"
                >
                  <i>
                    <img
                      src={addClient}
                      style={{ marginBottom: "-70px", border: "none" }}
                    ></img>
                  </i>
                  <i class="fas fa-home"> </i>
                  <Panel
                      className="custom"
                      header="کاربران"
                    key="1"
                    style={{ backgroundColor: "#f1faee" }}
                    bordered={false}
                    border={false}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        // backgroundColor: "#f1faee",
                        padding:"5px"
                      }}
                    >
                      اضافه کردن کاربر
                    </div>
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        // backgroundColor: "#f1faee",
                        padding:"5px"

                      }}
                    >
                      حذف کاربر{" "}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        // backgroundColor: "#f1faee",
                        cursor: "pointer",
                        padding:"5px"

                      }}
                      onClick={() => {
                        props.myclick(0);
                        if (isMobile) {
                          props.desktopview();
                        }
                      }}
                    >
                      ویرایش اطلاعات کاربر{" "}
                    </div>
                  </Panel>
                </Collapse>
              </a>

              <a class="dashboard-nav-item ">
                <Collapse
                  bordered={false}
                  border={false}
                  style={{
                    width: "100%",
                    float: "left",
                    backgroundColor: "#f1faee",
                    marginTop: "-20px",
                  }}
                  expandIconPosition="right"
                >
                  <i style={{ marginLeft: "5px" }}>
                    <img
                      src={selectJob}
                      style={{ marginBottom: "-65px" }}
                    ></img>
                  </i>
                  <i class="fas fa-tachometer-alt"></i>
                  <Panel
                      className="custom"
                      header="انتخاب محدوده ی خدماتی کاربر"
                    key="1"
                    style={{ backgroundColor: "#f1faee" }}
                    bordered={false}
                    border={false}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        // backgroundColor: "#f1faee",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        props.myclick(1);
                        if (isMobile) {
                          props.desktopview();
                        }
                      }}
                    >
                      اضافه کردن میز
                    </div>
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        backgroundColor: "#f1faee",
                      }}
                    ></div>
                  </Panel>
                </Collapse>
              </a>
              <a class="dashboard-nav-item">
                <Collapse

                  bordered={false}
                  border={false}
                  style={{
                    width: "100%",
                    float: "left",
                    backgroundColor: "#f1faee",
                  }}
                  expandIconPosition="right"
                >
                  <Panel
                      className="custom"
                    header="  میز"
                    key="1"
                    bordered={false}
                    border={false}
                    arrow={"left"}
                  >

                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        cursor: "pointer",
                          height:"100%" ,
                      }}
                      onClick={() => {
                        props.myclick(2);
                        if (isMobile) {
                          props.desktopview();
                        }
                      }}
                    >
                      اضافه کردن میز
                    </div>
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        // backgroundColor: "#f1faee",
                          height:"100%"
                      }}
                    >
                      حذف کردن میز
                    </div>

                  </Panel>
                </Collapse>
              </a>
              <div class="dashboard-nav-dropdown">
                <a class="dashboard-nav-item ">
                  <Collapse
                    bordered={false}
                    border={false}
                    style={{
                      width: "100%",
                      float: "left",
                      backgroundColor: "#f1faee",
                      marginTop: "-25px",
                    }}
                    expandIconPosition="right"
                  >
                    <i style={{ marginLeft: "5px" }}>
                      {/*<img*/}
                      {/*  // src={addFood}*/}
                      {/*  // style={{ marginBottom: "-60px" }}*/}
                      {/*></img>*/}
                    </i>
                    <Panel
                        className="custom"
                      header="  دسته بندی"
                      key="1"
                      style={{ backgroundColor: "#f1faee" }}
                      bordered={false}
                      border={false}
                    >
                      <div
                        style={{
                          width: "100%",
                          borderRadius: "5px",
                          // backgroundColor: "#f1faee",
                        }}
                        onClick={() => {
                          props.myclick(3);
                          if (isMobile) {
                            props.desktopview();
                          }
                        }}
                      >
                        اضافه کردن دسته بندی
                      </div>
                      <div
                        style={{
                          width: "100%",
                          borderRadius: "5px",
                          // backgroundColor: "#f1faee",
                        }}
                      >
                        حذف کردن دسته بندی
                      </div>
                    </Panel>
                  </Collapse>
                </a>
              </div>
              <div class="dashboard-nav-dropdown">
                <a
                  onClick={() => {
                    props.myclick(4);
                    if (isMobile) {
                      props.desktopview();
                    }
                  }}
                  class="dashboard-nav-item dashboard-nav-dropdown-toggle"
                >
                  <i class="fas fa-users"></i> تغییر سفارش
                </a>
              </div>
            </nav>
          </div>
          <div class="dashboard-app"></div>
        </div>
      </>
    </div>
  );
};
export default Dashboard;
