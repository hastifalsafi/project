import React, { useContext, useEffect, useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Garson from "../garson";



export function LoginForm(props) {
    const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [linkto, setlinkto] = useState(false);
  const baseurl = "https://digitalorderback.iran.liara.run/api/v1/login";
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    getData();
  }, []);
  const Nego = (myRole) => {
    switch (myRole) {
          case "super-admin":
      return navigate("/managerweb", {
        state: {
          role: myRole,
          accessToken :myRole,
        },
      });
      case  "garson":
        return navigate("/garson", {
          state: {
            role: myRole,
            accessToken :myRole,

          },
        });
    }
  };

  const getData = () => {
    fetch(`${baseurl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userName: user,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          return setlinkto(false), alert("Error");
        }
      })
      .then((data) => {
        console.log(data.data.user.role.label);

        // switch (data.data.user.role.label) {
        //   case "super-admin":
        //     localStorage.setItem("role", "SA369103@36910!^ns");
        //     break;
        //   //   case "Accountent":
        //   //     localStorage.setItem("role", "SACA366910@369103!>ts");
        //   //     break;
        //   //   case "Security":
        //   //     localStorage.setItem("role", "SAEC36910@36910!>ys");
        //   //     break;
        //   //   case "Chef":
        //   //     localStorage.setItem("role", "SAHC36010!>fs");
        //   //     break;
        //   //   case "Garson":
        //   //     localStorage.setItem("role", "SAAG36910@36!>ns");
        //   //     break;
        //   //   case "Delivery":
        //   //     localStorage.setItem("role", "SAED36910@36910!>ys");
        //   //     break;
        // }
        Nego(data.data.user.role.label);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container" style={{ position: "relative" }}>
      <BoxContainer className="BoxContainer">
        <Input
          className="Input"
          type="text"
          style={{ direction: "rtl", margin: "10px", borderRadius: "30px" }}
          placeholder="نام کاربری"
          onChange={(event) => setUser(event.target.value)}
        />

        <Input
          className="Input"
          type="password"
          style={{ direction: "rtl", margin: "10px", borderRadius: "30px" }}
          placeholder="رمز عبور"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Marginer direction="vertical" margin="25px" />

        <SubmitButton type="submit" onClick={getData}>
          ورود
        </SubmitButton>
      </BoxContainer>
    </div>
  );
}
