import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 80px;
  height: 36px;
  border-radius: 6px;
  border-color: transparent;
  background: #e0e0e0;
  box-shadow: 0px 2px 3px 0px #33333333;
  color: #3f3f3f;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  :hover {
    background: #aeaeae;
  }
  :focus {
    background: #aeaeae;
  }

  ${(props) => props.variant === "outline" && ``}
`;
