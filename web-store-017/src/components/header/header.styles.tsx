/**
 * @fileoverview header styled component 
 */
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
`;

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  /* as long as window width does not exceed 800px */
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  /* as long as window width does not exceed 800px */
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* as long as window width does not exceed 800px */
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

// reuse OptionLink with as="div" to render OptionLink as div element 
// see header.component.tsx <OptionLink as="div" onClick={... 
const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
};
