import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Cardpagesefaresh from "./Cardpagesefaresh";
import Clickcardpagesefaresh from "./Clickcardpagesefaresh";
import NeedGarson from "./Needgarson";
import { useMediaQuery } from "react-responsive";
import Modal from "react-modal";
import Modalmobile from "./modal";
import Loading from "./loading";
import "./garson.css";
import { factReducer, initalizestate } from "../factreducers";
import "../factreducers";
import { Action_type } from "../factsAction";
import { loadingtrue } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { message, onClose } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "./accountBox/loginForm";
const Garson = () => {
  // const location = useLocation();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.loading);
  const [showDiv, setShowDiv] = useState(false);
  const [sefaresh2, setSefaresh2] = useState({});
  const [sefaresh, setSefaresh] = useState([]);
  const [faname, setfaname] = useState([]);
  const [dateTimeStr2, setdateTimeStr2] = useState({});
  const [deleteDiv, setDeleteDiv] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [clickformobile, setclickformobile] = useState(false);
  const [mobileview, setmobileview] = useState(false);
  const [sefaresh3, setSefaresh3] = useState({});
  // const [loading, setloading] = useState(true);
  // const [message, setmessage] = useState("");
  const [desktopview, setdesktopview] = useState(true);
  const [errormassege, setErrormassege] = useState(true);
  // const accessToken = localStorage.getItem("accessToken");
  let accessToken =
    "U2FsdGVkX1/BqQbOhhjkTqf7/yOESZ7CX3pHL6Z0QS/Nh4vnTHDI6hLvpKk4fMJd2jxdsFqekUiBHQ2EPF86vz8GxY+UW1h8nFzv7WQj7g24s1E8en3leHD4/KJoftEmroyRe702PerqKPrdgyLq3kKCgRj/23nCMEhu1kHDaTaujGIDIYU6IYmzp7HxZWrHI7LRTEJ09YgLfWHjOtrDTqbTJHyFKVrm0vkAA6bjTcpZz/NDbS6j4Yxt6WJ8vDq0kluEcyD2kAorKI2QewUxh2SLMLLslo2bOocVxYZIXtOoj/Oz+rp34Plm+mb4vJOvTMIQoLTSQMkaTAUTI2if3waO9VgTTQbCyP7qiO0bi49dbw1DXXt5/avuj7JdmItUCbaaZl7ZVWt55W5oTO+rRoI/wKbuthsf5ZHmU3Sl/YGsEBm0JXS1wcirYpIApQQW66TwUFbgdIwJJRfQvXIy+YacFc78T/Y1JuoCdy9sKLKxIACJnugHEHdmmHShxRAJO4qM9fPfi/GogObxq5jWBwkMZ+02S8E5RBjIq7lWDc29irqQbMc2esAez8oE1Ti8sJ4sTYeJp5yNNDLvLkKj5aK1vYMevUpaJbW1Olk3np6g8tEARmAL4+dEAqllFPE+T/D1fhdWBTpdhfMDhOeRtM4o4Apwa7JFn0UdVMnc5+Njz1EVBqWdpOvktfuYfb/vvLcc/Z33um5L+l3+EbRq+qNfJYECZ9kSQRybsSvnFPUnOehCyAr59R++PKovE5mDvTNZAAlze7M+DoUT40SAZZ4mnO0sMdDm1jQzN4iu7WLUYaTIWAgCQxv5G1Z0Uu9U";
  const navigate = useNavigate();
  useEffect(() => {
    // getData();
    // if (location.state && location.state.role) {
    // } else {
    //   navigate("/");
    // }
    function acsess(accessToken) {}
    const interval = setInterval(getData, 1000);

    function handleResize() {
      if (window.innerWidth <= 768) {
        setmobile(true);
      } else setmobile(false);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      // window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);
  const getData = () => {
    fetch("https://digitalorderback.iran.liara.run/api/v1/get-all-orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setSefaresh(data.data.docs);
          // dispatch({ type: Action_type.fetch_success });
          dispatch(loadingtrue({ type: Action_type.fetch_success }));
        });
      })
      .catch(() => {
        const msgKey = Math.random().toString();
        const config = {
          key: msgKey,
          type: "error",
          content: "خطایی رخ داده است لطفا بار دیگر تلاش کنید.",
        };
        message.destroy();
        message.open(config);
        setTimeout(() => {
          message.destroy(msgKey);
        }, 2000);
        dispatch(loadingtrue({ type: Action_type.fetch_error }));
        setErrormassege(true);
      });
  };
  // const [state, dispatch] = useReducer(factReducer, initalizestate);
  function showDetail(sefaresh, dateTimeStr) {
    setShowDiv(true);
    setSefaresh2(sefaresh);
    setdateTimeStr2(dateTimeStr);
    setDeleteDiv(true);
  }
  function deletedetail(sefaresh) {
    setShowDiv(false);
    setSefaresh2(sefaresh);
  }
  function showsefareshatdiv() {
    setdesktopview(true);
  }
  function clickmobile(sefaresh) {
    setclickformobile(true);
    setSefaresh2(sefaresh);
    setDeleteDiv(true);
  }

  function khoob(props) {
    const dateObj = new Date(props);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();
    const timeOnlyStr = `${hours}:${minutes}:${seconds}`;
    return timeOnlyStr;
  }
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (sefaresh) => {
    setModalIsOpen(true);
    // setSefaresh2(sefaresh);
    setSefaresh3(sefaresh);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleDivClick = () => {
    if (isMobile) {
      // handle modal visibility here
    } else {
      showDetail(sefaresh);
      openModal();
    }
  };
  function mobilee() {
    setdesktopview(false);
  }
  return (
    <React.Fragment>
      <Row>
        {/* {isMobile && (
          <Modal isOpen={modalIsOpen} onRequestClose={modalIsOpen}>
            <Modalmobile
              closeModal={closeModal}
              sefaresh2={sefaresh2}
              timeOnly={khoob(sefaresh2.insertDate)}
            />
          </Modal>
        )} */}
        <div
          style={{
            backgroundColor: "#202020",
            width: "100%",
            height: "80px",
            scrollMarginBottom: "10px",
          }}
        >
          <Col>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "25px",
                display: "block",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              پنل صفحه مشاهده سفارشات
            </h1>
          </Col>
        </div>
      </Row>

      <Row>
        <Col lg="4" className="d-flex">
          <div className="hi">
            <div
              className="dashbord"
              style={{
                width: "100%",
                maxHeight: "100vh",
                overflowY: "scroll",
              }}
            >
              <div>
                {selector.loading ? (
                  <div className="Loading">
                    <Loading />
                  </div>
                ) : (
                  desktopview && (
                    <div>
                      {sefaresh.map((item) => (
                        <div>
                          <Cardpagesefaresh
                            openModal={openModal}
                            sefaresh={item}
                            sefareshattt={item.services}
                            order={item.orderNumber}
                            key={item._id}
                            showDetail={showDetail}
                            clickmobile={clickmobile}
                            timeOnly={khoob(item.updateDate)}
                            changeColor1={item.status}
                            type={item.type}
                            isMobile={isMobile}
                            mobilee={mobilee}
                            ispaid={item.isPaid}
                          />
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col lg="8" style={{ height: "100%" }}>
          <div>
            <div style={{ width: "100%", height: "100%" }}>
              <div>
                {showDiv ? (
                  <div>
                    <Clickcardpagesefaresh
                      sefaresh2={sefaresh2}
                      showDetail={showDetail}
                      deletedetail={deletedetail}
                      timeOnly={khoob(sefaresh2.updateDate)}
                      closeModal={closeModal}
                      changeColor1={sefaresh2.status}
                      ispaid={sefaresh2.isPaid}
                      type={sefaresh2.type}
                      mobilee={mobilee}
                      // role1={location.state.role}
                      showsefareshatdiv={showsefareshatdiv}
                      id={sefaresh2.serialNumber}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Garson;
