import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const FormContainer = styled.form`
  width: 0%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 50%;
  min-width: 200px;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin: 10px;

  &::placeholder {
    color: rgb(105, 105, 105);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid #49525b;
  }
`;

export const SubmitButton = styled.button`
  width: 50%;
  min-width: 200px;
  text-align: center;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  margin-bottom: 20px;
  background: linear-gradient(58deg, #227ed4 20%, #1384ed 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;
