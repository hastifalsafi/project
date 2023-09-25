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

const Garson = () => {
  const location = useLocation();

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
  const navigate = useNavigate();
  useEffect(() => {
    // getData();
    if (location.state && location.state.role) {
    } else {
      navigate("/");
    }
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
  let accessToken =
    "U2FsdGVkX19P75ly3tjD2UhO5d+G8KYDzl5HolbKsAhtuTITuHL+K/r2j8eyVSiafccy1MmmzNC9ezEeVx222WXqsdRRC1y2q5LaBNFmcXUjQjt8gGHwEY6MayTkgST0ev8TVffS2rA4CoJfFnv6vSKU4mNXDKel287K7jTyQiHzoxNlch13L+7LMJqtCUzWNfzgoAIyykm6B5CXZrwlOl5gQwkwkJYueZgr1sLdxJyDHnpDq7DEVq4hpK481G8ThQBdYKqWn9brIgTUu5iB2fMClX9JdoiUVI7AwXfEWg54Zgg8XusnnWg0t35Z0grznHq2JmNpzKY7Ny0OlHVjqZ+MSbc4yeo/VIunXacPD/P5iC0Oqgc74/WuoMO68VWd4eD02v++uUMrx1xLs+AvOO1NW8/DhYM9Fa7oj4WVupIhQXxl3Ih+XevsaNULjQjGUGKCUGo/xUINuD1zphvDhho5ynrvFEvlI1NoDN4Za7Rj14D2UhMzKmqRwffa6UNhpQqXMRGAjAUJnbKqvMTd9BQqpBziu7E5zaJoAzniDCiQl/Ttdqc6Z+IW7TMjVVRgSWhLNgW3SKlL/4yb01QTv5YvrKkEaKM/3j0YMiBH0YqSunmqddM99YQq1TjJKH2yU332PsglXnV0VQWxg1GmcxbrsC2VwotJhAcP4YOZL607yBZ3HKfci8OxeKdpbRgakTENUy8KW0fs45tHO9Z99fgOtJtMv7IekOpLHucQAnHBt6s47T+02hBTEMH+HbylkJ0IDRqSk18Ik2cfj5hrcW5bivMZOOO8ipJ6AU4OuRlqSxY8cPNhczHk5aEQvVpD";
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
                      role1={location.state.role}
                      showsefareshatdiv={showsefareshatdiv}
                      key={sefaresh2._id}
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
