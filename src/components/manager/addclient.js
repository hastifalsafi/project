import React, { useState, useEffect } from "react";
import "./addclient.css";
import addClient from "./add-user.png";
import { Container, Row, Col } from "reactstrap";
import { Menu, Dropdown, Collapse, CollapseProps } from "antd";
import { useMediaQuery } from "react-responsive";
import "antd/dist/reset.css";
import Edituser from "./edituser";
const Addclient = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pass, setPass] = useState("");
  const [role, setrole] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [getuser, setGetuser] = useState([]);
  const [selectuser, setSelectuser] = useState({});
  const [showdiv, setShowdiv] = useState(false);
  const [showadduserdiv, setShowadduserdiv] = useState(false);
  const [showgetuser, setShowgetuser] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const handleshowdiv = (getuser) => {
    setShowdiv(true);
    setShowadduserdiv(false);
    setSelectuser(getuser);
    if (isMobile) {
      setShowgetuser(false);
    }
  };
  const handleshowadduserdiv = () => {
    setShowadduserdiv(true);
    setShowdiv(false);
    if (isMobile) {
      setShowgetuser(false);
    }
  };
  useEffect(() => {
    const interval = setInterval(getalluser, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let accessToken =
    "U2FsdGVkX1/83rKDMk8C3tugSv7SoYH++s2+/CyyQ0Rrb3YsL11JlYfL7/ywmPLw+y5Ixw3R2kXLZXKQqNR1CkxtxVS+rbpcxKeK4DpBkSnbBzaVvaOQybQwM7HQJtBG2tnIWHyKwmPOJAiwiMTtK2l4bISnIqW00Tic9BdaGJ/4pc+wMPBu0a019M+35JYgeJBcO6H+QlpU4kO3HwvNiM5Qeh4QmZ1PhETpfDSEQh0F9c/ASU9nEdqfJLQSEQBNPS3mQOpgyfuWZWwgVmLxPj8EeoVCDlp+J81KjPOfxWJPyJ38CggwpfPnzjmKGmKaDYDpYQVTPZkS2fXuZo2p7sKO1trVg/81Tepf7z30TMbzpPIHkuN3eSjcM599lIHwWW0bzBAO2QW2bZwXiblAz4/0bJ254+KDefvgPkYAyNx/XZWVhfjyLz+0ii36pAseD9r9I6nuvoTMgHjFpv+ZrwFLkEh/YQ2EGM4/9tFr8ejeWi+VTKT7hdHwvE3LOmpf+TnU30cM0Fy2NOF/3uKuVXO85vZzjb1iVnNZ1TSwZ532bYVBUZbRVOZjO+cgaHRkk2rvfX7LCK0kzR9WCvTVzoL70h31qMMANaQcQVib+ynhy0MAHPFSVmrNBI23X4b1H+I/wRpAUZewk2sbXvKXRmyjcBXUYoIP6I1+MkLikltiDveOYQbOyymNpt5ERaY4KgKdQ7VccA0aGgMSyEPTbQLqwj6h40zQ445nhTI/K158aIiweAog1cbawIc4h/ngbQTMIE9KoXGmlifuZGUvUMtp8WCjdwJSsn0uXqgacBNBL9qbF0S+btUbBvYQG6dl";
  const getalluser = () => {
    fetch("https://digitalorderback.iran.liara.run/api/v1/get-all-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setGetuser(data.data);
        });
      })
      .catch((error) => alert("error", error));
  };
  useEffect(() => {
    getalluser();
  }, []);
  const { Panel } = Collapse;
  // let accessToken =
  //     "U2FsdGVkX1+JJnDlJq+wrbXDwUI7kptZrkKHgNJvF8SL+wKGd5JpM3jVZKWYTOPx5a9e+j32lFyy4DDPu5MOMfemYY0ATeLSvD3zBe4iEF3fywjbRXMg/44vgoHQ24PlndP9+tux4Jx4jIqbCbsRPoCK5mURBTB+05Vc2I3kh5bMasRoxIJqH+AQrUxT/9bXTl6w/NY0QXbyNVA+6nfYjsg5E9An/5tYK2gn0MIAZQOXY1ILCZz/ABRYSQ5aHbbpZirTOj3Q3/UeLPKPeVxSXc2P+j3p62BhTkXpZp8TjmOU4YltuCcGv/weVzG3eiIAt4yC2xc9e0YkW3Hm3XXFK5HHtH24jImnHDq1tHSynNxD0MPAnIuOOkfZWY46vShVY0XL8DOY4oE8nqeG07AhoaK7wTCvJGtR0K7UekpSi0EMUBgXzpvpaSKq27fThILZrzm1exdQQeSnzXw4vCDt4xx7ubHUS/EEceVB4psxZg6B3nFZb5tW8WEJToKUF23njd8awYyH+2R3BZHpC6tivaXZk+nF2FiuFbzH8D2JWrx9WCkeOnUdbH/ZikVm19iHpBRYKOh05ppCon6xfGZKOeZ2EzcS2uMKQ1yfSvvNKsRmrPu0bsZDtPvS8wcW/qLtO0Yj0RyK/Y/CUuAUS8lpCFd50fbDDyVckz3xJ6/3jPbEcKAo69uhkYTZRnOkdgrp0leWSHzCeQQXlAO1HHdyjbL41Uj0v9Zfot6vNZKhCux4l8+ms239kI+v4MxdEpPfH0U3Jkr/X5p2s+XvTwcQ/Xrsspv6pEsptekYJZBpCbLm1XQxN9fT8e2iWEaLYBqv"
  const insertuser = () => {
    fetch("https://digitalorderback.iran.liara.run/api/v1/insert-user", {
      method: "POST",
      body: JSON.stringify({
        firstName: fname,
        lastName: lname,
        password: pass,
        role: role,
        mobile: mobile,
        userName: username,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => alert("error"));
  };

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
        <Row>
          <Col lg="3" className="getalluser">
            {showgetuser && (
              <>
                {" "}
                <p
                  className="adduser"
                  style={{
                    marginRight: "20px",
                    paddingTop: "30px",
                    cursor: "pointer",
                  }}
                  onClick={handleshowadduserdiv}
                >
                  اضافه کردن کاربر
                </p>
                {getuser.map((item) => {
                  return (
                    <p
                      style={{
                        marginRight: "20px",
                        paddingTop: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleshowdiv(item)}
                    >
                      {item.firstName} {item.lastName}
                    </p>
                  );
                })}
              </>
            )}
          </Col>

          <Col lg="9">
            {" "}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "40%",
                height: "60px",
                justifyItems: "center",
                margin: "auto",
              }}
            >
              <p
                style={{
                  float: "left",
                  padding: "15px",
                  fontSize: "20px",
                  color: "rgb(10, 110, 110) ",
                }}
              >
                ویرایش اطلاعات کاربر
              </p>
            </div> */}
            {showadduserdiv && (
              <>
                <Row>
                  <Col lg="6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      <label class="input2">
                        <span>نام</span>
                        <input
                          className="input__field"
                          type="text"
                          placeholder="نام کاربر را وارد کنید"
                          style={{ fontSize: "14px", textAlign: "left" }}
                          onChange={(event) => setFname(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label class="input2">
                        <span> نام خانوادگی </span>
                        <input
                          className="input__field2 "
                          type="text"
                          placeholder="نام خانوادگی کاربر را وارد کنید"
                          style={{
                            fontSize: "14px",
                            justifyContent: "space-around",
                            textAlign: "left",
                          }}
                          onChange={(event) => setLname(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <label class="input2 ">
                        <span> نام کاربری </span>
                        <input
                          className="input__field "
                          type="text"
                          placeholder="نام کاربری کاربر را وارد کنید"
                          style={{
                            fontSize: "14px",
                            justifyContent: "space-around",
                            textAlign: "left",
                          }}
                          onChange={(event) => setUsername(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      <label class="input2">
                        <span> رمزعبور </span>
                        <input
                          className="input__field"
                          type="password"
                          placeholder="رمزعبور را وارد کنید"
                          style={{
                            fontSize: "14px",
                            marginBottom: "20px",
                            textAlign: "left",
                          }}
                          onChange={(event) => setPass(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>

                  <Col lg="6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      <label class="input2">
                        <span> تلفن همراه </span>
                        <input
                          className="input__field  "
                          type="text"
                          placeholder="تلفن همراه را وارد کنید"
                          style={{
                            fontSize: "14px",
                            marginBottom: "20px",
                            textAlign: "left",
                          }}
                          onChange={(event) => setMobile(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      {/*<Collapse*/}
                      {/*  //  bordered={false}*/}
                      {/*  //  border={false}*/}
                      {/*  style={{*/}
                      {/*    width: "40%",*/}
                      {/*    float: "left",*/}
                      {/*    backgroundColor: "#f1faee",*/}
                      {/*  }}*/}
                      {/*  expandIconPosition="right"*/}
                      {/*>*/}
                      {/*  <Panel*/}
                      {/*    header="انتخاب نقش"*/}
                      {/*    key="1"*/}
                      {/*    style={{}}*/}
                      {/*    bordered={false}*/}
                      {/*    border={false}*/}
                      {/*  ></Panel>*/}
                      {/*</Collapse>*/}
                      <label className="input2 ">
                        <span> نقش کاربر </span>
                        <input
                          className="input__field"
                          type="text"
                          placeholder="نقش کاربر را وارد کنید"
                          style={{
                            fontSize: "14px",
                            justifyContent: "space-around",
                            textAlign: "left",
                          }}
                          onChange={(event) => setrole(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>
                  <Col lg="6">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      <label className="input2 ">
                        <span> ایمیل کاربر </span>
                        <input
                          className="input__field"
                          type="text"
                          placeholder="ایمیل کاربر را وارد کنید"
                          style={{
                            fontSize: "14px",
                            justifyContent: "space-around",
                            textAlign: "left",
                          }}
                          onChange={(event) => setrole(event.target.value)}
                        />
                      </label>
                    </div>
                  </Col>
                </Row>
                <div>
                  <p className="add" onClick={insertuser}>
                    ذخیره
                  </p>
                </div>
              </>
            )}
            {showdiv && (
              <div>
                <Edituser
                  handleshowdiv={handleshowdiv}
                  user={selectuser}
                  userid={selectuser._id}
                />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Addclient;
