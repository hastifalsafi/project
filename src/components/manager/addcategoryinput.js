import React from "react";
import "./addcategoryinput.css";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
const Addcategoryinput = ({ category, handleshowdiv, categoryid }) => {
  const [faName, setFaname] = useState("");
  const [sort, setSort] = useState({});
  const [des, setDes] = useState("");
  const sortValue = parseInt(sort);
  let accessToken =
    "U2FsdGVkX19w7vpxHYkY6CtIMWsDrhOVLpAs/Vszi3+1l26rUvk6/nbl7q86REwl45YgXkTlQHnlKQY6CimqXoxDaWeiQcIi3v4Tr/3M9KnE5e4IQKoXBNdjrkPOmXPfeE6ne3XYhIDB77jccyDIZIEBu+afeq3/SrKqmRssfxNLvUVjbZZrwwajSCojO9nNxac2zmkuXDOlkxGFYd1vBy8yq9TV9KtVl1lAvCFGOF/8k/i+/LwQ0BHRDjBahRkoCTiTlILClyHobNnTSh5D5zZ1hNw2tVzV/4iuownGbkZk5h2s6DiFVoXmk4ka9sEngykL9+Nm9Vhz9plB0UgTMRlU8QfZNRcr0KlI9TSXKG9aSJ7fR7P6ZJplQZYI5A48g30dLFhkuGCdQOu6jnajq96D/EifanajjiEbCKeXjScy7sU/sStzrGUqVmZdJLCMs52diw7zqVB1sfBczZIDy04elk57xZzmRa6/WtMWIgvlo5akWN3MNANZIY4uijfn9L6lVhEH2eaqJohvI8skgrcYJ6fI2TxKjGMOUxxJsx/HCMws5TWgr+X7cJHaav19uXJTk195AMyGl7enndoguN3vDCP5WfjZ+UueKa7En4IxkVTSlKUe61iO+7G8O4anqK6ihUMCc5ERNMfXpmV/lyj1+qslm4zPa6hDNHFYQS3/4z+FewyOY7LhYgWW7MQNsWQAXVQ15bu08Ry2VQj6Qe8oy45RNKx08jzjxjgLgl2K+hUKu4l22sGgogOtx8lJaz52q3vZ8aNO6qV3dC1eOHobNFaLQVE5PepLvF/fLcjV6zX1FKfpBFTlAI6ZyJSI";
  const insertcategory = () => {
    fetch(
      `https://digitalorderback.iran.liara.run/api/v1/edit-category/${categoryid}`,
      {
        method: "POST",
        body: JSON.stringify({
          faName: faName,
          sort: sortValue,
          description: des,
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
  const deletecategory = () => {
    fetch(
      `https://digitalorderback.iran.liara.run/api/v1/delete-category/${categoryid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((data) => {})
      .catch((error) => {});
  };
  return (
    <>
      <Row>
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <label class="CNinput">
            <span>نام دسته بندی</span>
            <input
              className="CNinput__field"
              type="text"
              placeholder={category?.faName}
              style={{ fontSize: "14px", textAlign: "right" }}
              onChange={(e) => {
                setFaname(e.target.value);
              }}
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <label class="CNinput">
            <span>توضیحات</span>
            <input
              className="CNinput__field"
              type="text"
              placeholder={category?.description}
              style={{ fontSize: "14px", textAlign: "right" }}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            />
          </label>
        </div>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <label class="CNinput">
            <span>تعداد</span>
            <input
              className="CNinput__field"
              type="text"
              placeholder={category?.sort}
              style={{ fontSize: "14px", textAlign: "right" }}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            />
          </label>
        </div>{" "}
        <div>
          <p className="delete" onClick={deletecategory}>
            حذف
          </p>
          <p className="add" onClick={insertcategory}>
            ذخیره
          </p>
        </div>
      </Row>
    </>
  );
};
export default Addcategoryinput;
