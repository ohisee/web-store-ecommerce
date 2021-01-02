/**
 * @fileoverview with data higher order component returns a component 
 */
import React from "react";

/**
 * @param {React.ComponentType} WrappedComponent 
 * @returns {React.Component} 
 */
const withData = (WrappedComponent) => {

  /**
   * @typedef {object} PropsType 
   * @property {string} dataSource 
   */

  /**
   * @extends {React.Component<PropsType>}
   */
  class WithData extends React.Component {

    /**
     * @typedef {object} StateType 
     * @property {any[]} data 
     */
    /** @type {StateType} */
    state = {
      data: [],
    }

    componentDidMount() {
      fetch(this.props.dataSource)
        .then(response => response.json())
        .then(data => this.setState({ data: data }));
    }

    render() {
      return (
        this.state.data.length < 1 ?
          <div>loading...</div> :
          <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }

  return WithData;
};

export default withData;
