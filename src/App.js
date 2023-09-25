import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import ImageLogin from "./components/imageLogin";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;






function App() {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          width: "auto",
          height: "auto",
        }}
      >
        {/*<Col xs="4" className="d-flex">Flex Column 1</Col>*/}
        {/*<Col xs="8" className="d-flex">Flex Column 2</Col>*/}
        {/*<Col  sm="6" className="d-flex" style={{width:"200px" , height:"400px" , marginRight:"30px" , display: "flex", justifyContent: "flex-start" }}>*/}
        {/*  <ImageLogin/>*/}
        {/*</Col>*/}
        <Col
          lg="6"
          className="d-flex"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <AppContainer>
            <AccountBox />
          </AppContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
