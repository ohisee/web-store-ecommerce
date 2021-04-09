/**
 * @fileoverview with spinner higher order component 
 */
import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

interface CustomComponentProps {
  isLoading: boolean,
  [key: string]: any,
}
const WithSpinner = (WrappedComponent: React.ComponentType<any>) => {
  const Spinner: React.FC<CustomComponentProps> =
    ({ isLoading, ...otherProps }) => {
      return isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
          <WrappedComponent {...otherProps} />
        )
    };
  return Spinner;
}

export default WithSpinner;
