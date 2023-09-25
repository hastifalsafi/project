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
  let accessToken =
    "U2FsdGVkX19tdtYotLJoeIyt5QJwuBGDFIbi6n7o0/noXJ5AXmu0a6X368eXNtLF2kDCoWwv+Rze/f7Y/t14XlzpeHQDws96Fbggno6DX9iBn9Sy8UpzwK1H/7J8p3DxQy4cGa/cbuMsejMPPue8a75qWx3lkbuSg8V6tSxw2xAj5oSN0vOiHnipXimsmn2mo4hH5KuFaPsBwPvs+KUW8ee6Y/WqQk4bzgcJ5YtN2RoDLTafYNLDqtRU8TNC13SkksvacevIKQWfa5sK+dRlaJOzZ0/tHJti+TJxZc5rvU4P2SZn3HOkr597hM7kMH7cYQ+pmQZzVwp6fku9LNxmcauj+Nrb4kGqgsoOHKu9EhbpZ8MOTowMIaAQlhHcVgfJklrw34twfkKU0Ei2TFuA8uTFOIgD27/crlDgBhW0wS23kEg1fUrwTcpd/CmPjdiLOwPmBJ9l+RVJTjYSUFEv5ptpaF4u9GVZZVMdfyin2D0S6WCQHfuAF2XmoojAuHVcwpv08lmd2ex5AsvTdV1d0uUvFg8KyMqBUrnygJlFGF1sfoN9yutALvEGNfhCzCfwQRiV4VryIu2QRCQdlJeCUrhaa8jcCiEd/isLHFfwngLWTr8TzLP69zt1F8ZpG+Y+PIBKQVw+qc9Hl+F/CHPICqEMe316WZfK1n35UK8NRKdM3rqE5vTMm03WtppzmevgcOHRMKSo6bNHEEbfN1Vs2X5CBAHzmebrqILwdwd/MbWXCskpyBajT9QrmZHcvuUG8Z9W33LeGGdb5QRIvGiGqHAlc8+ng56Z3pLWPmZo6/ZqnJCD1nDIWkHFpiC3c4St";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [linkto, setlinkto] = useState(false);
  const baseurl = "https://digitalorderback.iran.liara.run/api/v1/login";
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const Nego = (myRole) => {
    return navigate("/garson", {
      state: {
        role: myRole,
      },
    });
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
