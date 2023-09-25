import React, { useState } from "react";
import "./managerweb.css";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./dashboard";
import Addclient from "./addclient";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Regionuser from "./regionuser";
import AddTable from "./addTable";
import AddCatagory from "./addCategory";
import ChangeOrder from "./ChangeOrder";
const Managerweb = () => {
  const selector = useSelector((state) => state.addclient);
  const [which, setWhich] = useState(0);
  const [desktopview, setDesktopview] = useState(true);
  var list = [
    <Addclient />,
    <Regionuser />,
    <AddTable />,
    <AddCatagory />,
    <ChangeOrder />,
  ];

  return (
    <div>
      <Row>
        <Col lg="3">
          {desktopview ? (
            <Dashboard
              myclick={(page) => {
                setWhich(page);
              }}
              desktopview={() => {
                setDesktopview(false);
              }}
            />
          ) : (
            <div></div>
          )}
        </Col>
        <Col lg="9">
          {/* {selector.addclient ? (
            <div>
              <Addclient />
            </div>
          ) : (
            <div></div>
          )} */}
          {list[which]}
        </Col>
      </Row>
    </div>
  );
};
export default Managerweb;
