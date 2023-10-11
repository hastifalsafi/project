import React from "react";
import "./addCategory.css";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Addcategoryinput from "./addcategoryinput";
const AddCatagory = () => {
  const [getcategory, setGetcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [showdiv, setShowdiv] = useState(false);
  const handleshowdiv = (getcategory) => {
    setShowdiv(true);
    setSelectedCategory(getcategory);
  };
  useEffect(() => {
    const interval = setInterval(getallcategory, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let accessToken =
    "U2FsdGVkX18cRyVN7uxlmGK9myLwVHzpJ3UFaQE/3Qp/KuYrh5vPoG7cL+ch8tZeCDPqL2DtVuLq4ew5C2UOMswvE4jm9/yw/n/HPWSXWgK4pd1ZYqAJwrYw3McDM+AtAswbcGr5s/7GLMFD9oK5xSdRidtVEh5t3yoajx5Xd5eKwfUrEpOk51u6Ejfvk8kiZgdSDVKb+tgmGclrzGBt8Jv4FAxNAN/tGSvvl+Wv/OOqO0rxqDRZWTp0a0ezVI/Bd0AGv0UR9dCeZZAdaGyCYoPsYW/ApurblsPll2Vdtf+XXZPh4RLWE9GJrtNFV+KOX2WDAa7b1GqvVBtbunkYdbWUe8n6Sh1AzcEsvvJdNqYsM7wpem3GfN9dF1TxIfMBnqGvkjipsKsycCVNQSCbGWLmT8qsqyJlFK9cZZpSDiXhEngsfwH9yGmwri7HZzSjGTH/kovD1h5NlGChxoVB18BWYXqL6U1cKQ5n5FkWMvAmxpa7oeIBop5I7UaS5qEEsXURDyMXEtIBsdMrkjuaXuo4EWy8LyCmrLNIaPZ7AGEJr5m3N/8hTRPS+19aQbTbmD8SdOt/ZyfjDYG0TVr58RnD0mjHJKUGvjdhirfZs4vAl5XLcN9i+DU3tBPqrsLT/EF8uH0GaKOWt96k2/j45AdBDEBdmbZjKNSer2QYImf3CjSUqzXT9H3Ixhx/xzYrtCbYqe4U2yY+DZDkB+ezkacNFBbVXz2XvTzFpJ5W74qK3cVTbjootcqQEv53oRwI+aOHV2F6S8DFQRAlxYkBMMy0+0oeURMoHaiKPV76OU0hg5y7afsD1fehnTPCi2Ad";
  const getallcategory = () => {
    fetch(
      "https://digitalorderback.iran.liara.run/api/v1/get-all-category-by-seller",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          setGetcategory(data.data);
        });
      })
      .catch((error) => alert("error", error));
  };
  useEffect(() => {
    getallcategory();
  }, []);
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
      <div className="addcategorydiv">
        <Row>
          <Col lg="3">
            <div className="getallcategorydiv">
              <p
                className="addcategory"
                style={{
                  marginRight: "20px",
                  paddingTop: "30px",
                  cursor: "pointer",
                }}
              >
                اضافه کردن محصول
              </p>
              {getcategory.map((item) => {
                return (
                  <>
                    <p
                      style={{
                        marginRight: "20px",
                        paddingTop: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleshowdiv(item)}
                    >
                      {item.faName}
                    </p>
                  </>
                );
              })}
            </div>
          </Col>
          <Col lg="9">
            {showdiv && (
              <Addcategoryinput
                category={selectedCategory}
                handleshowdiv={handleshowdiv}
                categoryid={selectedCategory._id}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default AddCatagory;
