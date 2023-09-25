import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./delivery.css";
import closeicon from "../Delivery/close.png";
import Deliverybutton from "../deliverybutton";
const Delivery = ({
  orderNumber,
  timeOnly,
  Deliverysefaresh,
  deletedetail,
  showsefareshatdiv,
  ispaid,
}) => {
  function handleDeleteCard() {
    deletedetail();
    showsefareshatdiv();
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        height: "100vh",
        position: "absolute",
      }}
    >
      <div className="divOn">
        <div>
          <img
            src={closeicon}
            style={{
              height: "24px",
              width: "24px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
            onClick={handleDeleteCard}
          ></img>
        </div>
        <Row className="div1">
          <div className="divParaghraf">
            <p>
              شماره سفارش : <span>{orderNumber}</span>
            </p>
            <p>
              ساعت سفارش:<span>{timeOnly}</span>
            </p>
            <p>
              {ispaid === false ? (
                <div style={{ color: "red" }}>پرداخت نشده</div>
              ) : ispaid === true ? (
                <div>پرداخت شده</div>
              ) : (
                <div>1123</div>
              )}
            </p>
          </div>
        </Row>
        <div className="address">
          <p> آدرس</p>
        </div>
        <div className="addressdescription">
          <div>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          </div>
        </div>
        <div className="mapdiv">
          <p>نقشه</p>
        </div>
        <div className="livemap">
          <div>fasdsgf</div>
        </div>
        <div className="div2">
          <span>
            <table className="sefarsh">
              <tr>
                <th> سفارش</th>
                <th>قیمت سفارش</th>
                <th>تعداد سفارش</th>
              </tr>
              {Deliverysefaresh.map((items) => (
                <tr key={items.id}>
                  <td>{items.service.faName}</td>
                  <td>{items.service.price}</td>
                  <td>{items.count}</td>
                </tr>
              ))}
            </table>
          </span>
        </div>
        <div className="description">
          <p>توضیحات</p>
        </div>
        <div className="desciptiondiv"></div>
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
          <Deliverybutton />
        </Row>
      </div>
    </div>
  );
};
export default Delivery;
