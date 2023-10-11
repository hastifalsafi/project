import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
const Edituser = ({ handleshowdiv, user, userid }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pass, setPass] = useState("");
  const [role, setrole] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  let accessToken =
    "U2FsdGVkX19w7vpxHYkY6CtIMWsDrhOVLpAs/Vszi3+1l26rUvk6/nbl7q86REwl45YgXkTlQHnlKQY6CimqXoxDaWeiQcIi3v4Tr/3M9KnE5e4IQKoXBNdjrkPOmXPfeE6ne3XYhIDB77jccyDIZIEBu+afeq3/SrKqmRssfxNLvUVjbZZrwwajSCojO9nNxac2zmkuXDOlkxGFYd1vBy8yq9TV9KtVl1lAvCFGOF/8k/i+/LwQ0BHRDjBahRkoCTiTlILClyHobNnTSh5D5zZ1hNw2tVzV/4iuownGbkZk5h2s6DiFVoXmk4ka9sEngykL9+Nm9Vhz9plB0UgTMRlU8QfZNRcr0KlI9TSXKG9aSJ7fR7P6ZJplQZYI5A48g30dLFhkuGCdQOu6jnajq96D/EifanajjiEbCKeXjScy7sU/sStzrGUqVmZdJLCMs52diw7zqVB1sfBczZIDy04elk57xZzmRa6/WtMWIgvlo5akWN3MNANZIY4uijfn9L6lVhEH2eaqJohvI8skgrcYJ6fI2TxKjGMOUxxJsx/HCMws5TWgr+X7cJHaav19uXJTk195AMyGl7enndoguN3vDCP5WfjZ+UueKa7En4IxkVTSlKUe61iO+7G8O4anqK6ihUMCc5ERNMfXpmV/lyj1+qslm4zPa6hDNHFYQS3/4z+FewyOY7LhYgWW7MQNsWQAXVQ15bu08Ry2VQj6Qe8oy45RNKx08jzjxjgLgl2K+hUKu4l22sGgogOtx8lJaz52q3vZ8aNO6qV3dC1eOHobNFaLQVE5PepLvF/fLcjV6zX1FKfpBFTlAI6ZyJSI";
  const edituser = () => {
    fetch(
      `https://digitalorderback.iran.liara.run/api/v1/edit-user/${userid}`,
      {
        method: "POST",
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          password: pass,
          role: role,
          mobile: mobile,
          userName: username,
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => alert("error"));
  };
  const deleteuser = () => {
    fetch(
      `https://digitalorderback.iran.liara.run/api/v1/delete-user/${userid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((data) => {
        console.log("کاربر با موفقیت حذف شد", data);
      })
      .catch((error) => {
        console.log("خطا در حذف کاربر");
      });
  };
  return (
    <div>
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
                  placeholder={user.firstName}
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
                  placeholder={user.lastName}
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
                  placeholder={user.userName}
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
                  placeholder={user.mobile}
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
              <label className="input2 ">
                <span> نقش کاربر </span>
                <input
                  className="input__field"
                  type="text"
                  placeholder={user.role.name}
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
                  placeholder={user.email}
                  style={{
                    fontSize: "14px",
                    justifyContent: "space-around",
                    textAlign: "left",
                  }}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            </div>
          </Col>
        </Row>
        <div>
          <p className="add" onClick={edituser}>
            ذخیره
          </p>
          <p className="delete" onClick={deleteuser}>
            حذف
          </p>
        </div>
      </>
    </div>
  );
};
export default Edituser;
