/**
 * @fileoverview custom button styled component 
 */
import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #000000;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }
`;

const invertedButtonStyles = css`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4385f4;
  color: #ffffff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

/**
 * this function is to determine which button styles to return 
 * @param props 
 */
const getButtonStyles = (props: {
  isGoogleSignIn?: boolean,
  inverted?: boolean,
  children?: React.ReactNode,
  [key: string]: any;
}) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  // font-family: 'Open Sans Condensed';
  font-family: inherit;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }

  /* as long as window width does not exceed 800px */
  @media screen and (max-width: 800px) {
    min-width: unset;
    padding: 0 10px;
  }

  ${getButtonStyles}
`;
