/**
 * @fileoverview error boundary component 
 */
import React from "react";
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./error-boundarty.styles";

interface ErrorBoundaryProps { }
interface ErrorBoundaryState {
  hasErrored: boolean,
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log("Error ocurred", error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"} />
          <ErrorImageText>This Page is Broken</ErrorImageText>
        </ErrorImageOverlay >
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
