import React from "react";
import "./addTable.css";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

const AddTable = () => {
  const [gettablenumber, setGettablenumber] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  const gettable = () => {
    fetch("https://digitalorderback.iran.liara.run/api/v1/get-all-table", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setGettablenumber(data.data);
        });
      })
      .catch((error) => alert("error", error));
  };
  // useEffect(() => {
  //   const interval = setInterval(gettable, 10000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  useEffect(() => {
    gettable();
  }, []);
  return (
    <div
      className="addtablediv"
      style={{
        display: "flex",
        height: "100vh",
        width: "90%",
      }}
    >
      {gettablenumber.map((item) => {
        return (
          <div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              <Row>
                <Col>
                  <button
                    style={{
                      borderRadius: "10px",
                      width: "auto",
                      minWidth: "50px",
                      height: "auto",
                      display: "flex",
                    }}
                  >
                    {item.number}
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddTable;
