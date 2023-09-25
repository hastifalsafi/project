import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import image1 from "../../23.jpg";
// import { SignupForm } from "./signupForm";
import image2 from "../../User.png";

const BoxContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #adb5bd;
  box-shadow: 0 0 6px #32354d;
  position: relative;
  overflow: hidden;
  margin: auto;
  padding-bottom: 10px;
  top: 170px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;

  background: rgb(139, 0, 130);
  background: linear-gradient(58deg, rgb(139, 0, 139) 20%, rgb(0, 0, 0) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {},
  collapsed: {},
};

const expandingTransition = {};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <BackDrop
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === "signin" && (
          <HeaderContainer>
            <HeaderText
              style={{
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              {/*<div>*/}
              {/*  <img src={image2} style={{width:"100px" , height:"100px" , borderRadius:"30px" }}></img>*/}
              {/*</div>*/}
              <div>وارد شوید</div>
            </HeaderText>
          </HeaderContainer>
        )}

        <InnerContainer>{active === "signin" && <LoginForm />}</InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
