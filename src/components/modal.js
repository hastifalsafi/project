import React from "react";
import { Container, Row, Col } from "reactstrap";
import close from "../close.png";
import "./modal.css";
const Modalmobile = ({
  closeModal,
  showDetail,
  timeOnly,
  sefaresh2,
  sefaresh3,
}) => {
  function handledeletecardmodal() {
    closeModal();
  }
  return (
    <>
      <div className="" style={{ width: "100%" }}>
        <div>
          <img
            src={close}
            style={{
              height: "24px",
              width: "24px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
            onClick={handledeletecardmodal}
          ></img>
        </div>
        <Row className="divsefaresh">
          <div className="divParaghraff" style={{ display: "flex" }}>
            <p>
              شماره سفارش : <span>{sefaresh2.orderNumber}</span>
            </p>
            <p className="pClock">
              ساعت سفارش:
              <span>{timeOnly}</span>
            </p>
            <p>
              شماره میز:
              <span>{sefaresh2.table.number}</span>
            </p>
          </div>
        </Row>
        <div className="div2">
          <span>
            <table className="sefarsh">
              <tr>
                <th> سفارش</th>
                <th>قیمت سفارش</th>
                <th>تعداد سفارش</th>
              </tr>
              {sefaresh2.services.map((mobileitems) => (
                <tr key={mobileitems.id}>
                  <td>{mobileitems.service.faName}</td>
                  <td>{mobileitems.service.price}</td>
                  <td>{mobileitems.count}</td>
                </tr>
              ))}
            </table>
          </span>
        </div>
        <Row
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: "40px",
            marginRight: "10px",
          }}
        >
          <Col lg="3">
            {" "}
            <button className="" style={{}}>
              سفارش تمام شده{" "}
            </button>
          </Col>
          <Col lg="3">
            <button className="" style={{}}>
              سفارش پرداخت شده
            </button>
          </Col>
          <Col lg="3">
            <button className="" style={{}}>
              تحویل داده شده
            </button>
          </Col>
          <Col lg="3">
            <button className="" style={{}}>
              ثبت سفارش جدید
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Modalmobile;
