import React, { useEffect, useState } from "react";
import "./Clickcardpagesefaresh.css";
import Cardpagesefaresh from "./Cardpagesefaresh";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Close from "../close.png";
import Garsonbutton from "./garsonbutton";
import NeedGarson from "./Needgarson";
import Delivery from "./Delivery/delivery";
export function RenderRowbutton(props) {
  switch (props.role) {
    case "super-admin":
      return <NeedGarson changeColor1={props.changeColor1} key={props.key} />;
    default:
      return <div />;
  }
}
const Clickcardpagesefaresh = ({
  sefaresh2,
  deletedetail,
  timeOnly,
  type,
  mobilee,
  desktopview,
  showsefareshatdiv,
  ispaid,
  role1,
  changeColor1,
  key,
}) => {
  const [role, setRole] = useState({ role1 });
  function handleDeleteCard() {
    deletedetail();
    showsefareshatdiv();
  }
  useEffect(() => {
    // var role1 = localStorage.getItem("role");
    // switch (role1) {
    //   case "SA369103@36910!^ns":
    //     setRole("super-admin");
    //     break;
    //   // case "SACA366910@369103!>ts":
    //   //   role = "accountent";
    //   //   break;
    //   // case "SAEC36910@36910!>ys":
    //   //   role = "security";
    //   //   break;
    //   // case "SAHC36010!>fs":
    //   //   role = "chef";
    //   //   break;
    //   // case "SAAG36910@36!>ns":
    //   //   role = "garson";
    //   //   break;
    //   // case "SAED36910@36910!>ys":
    //   //   role = "delivery";
    //   //   break;
    // }
  }, []);

  return (
    <div>
      {type === "Internal" ? (
        <NeedGarson
          sefaresh2={sefaresh2.table}
          showsefareshatdiv={showsefareshatdiv}
          deletedetail={deletedetail}
          key={key}
        />
      ) : type === "pickup" ? (
        <Delivery
          orderNumber={sefaresh2.orderNumber}
          timeOnly={timeOnly}
          Deliverysefaresh={sefaresh2.services}
          deletedetail={deletedetail}
          showsefareshatdiv={showsefareshatdiv}
          ispaid={ispaid}
          key={key}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            height: "100vh",
            marginTop: "-100px",
          }}
        >
          <div className="divOn">
            <div>
              <img
                src={Close}
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
              {/* <div className="divParaghraf"> */}
              <Col>
                <p>
                  شماره سفارش : <span>{sefaresh2.orderNumber}</span>
                </p>
                <p>
                  ساعت سفارش:<span>{timeOnly}</span>
                </p>
              </Col>
              <Col>
                <p>
                  شماره میز:<span>{sefaresh2.table}</span>
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
              </Col>
              {/* </div> */}
            </Row>
            <div className="div2">
              <span>
                <table className="sefarsh">
                  <tr>
                    <th> سفارش</th>
                    <th>قیمت سفارش</th>
                    <th>تعداد سفارش</th>
                  </tr>
                  {sefaresh2.services.map((items) => (
                    <tr key={items.id}>
                      <td>{items.service.faName}</td>
                      <td>{items.service.price}</td>
                      <td>{items.count}</td>
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
              <RenderRowbutton
                role={role1}
                changeColor1={changeColor1}
                key={key}
              />
              {/* {role == "super-admin" ? <Garsonbutton /> : role=="garson" ? <AdminButton/> : } */}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};
export default Clickcardpagesefaresh;
