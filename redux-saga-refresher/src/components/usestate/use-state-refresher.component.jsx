/**
 * @fileoverview use state React hook refresher 
 */
import React, { useState } from "react";
import Card from "../card/card.component";

/**
 * @type {React.FC}
 */
export const UseStateRefresher = () => {

  /** @type {[string, (name: string) => void]} */
  const [name, setName] = useState("Walker");

  /** @type {[string, (address: string) => void]} */
  const [address, setAddress] = useState("San Mateo");

  return (
    <Card>
      <h2>{name} {address}</h2>
      <button onClick={() => setName("Talker")}>Set Name to Another</button>
      <button onClick={() => setAddress("San Jose")}>Set Address</button>
    </Card>
  );
}

/**
 * @typedef {object} StateType
 * @property {string} name 
 * @property {string} address 
 */

/**
 * @extends {React.Component<{}, StateType>}
 */
export class StateClassComponent extends React.Component {

  state = {
    name: "Walker",
    address: "Fremont",
  }

  /**
   * @param {string} name 
   */
  onClick(name) {
    this.setState({ name: name });
  }

  render() {
    return (
      <Card>
        <h2>{this.state.name} {this.state.address}</h2>
        <button onClick={() => this.onClick("Talker")}>Set Name to Another</button>
        <button onClick={() => this.setState({ address: "San Jose" })}>Set Address</button>
      </Card>
    );
  }
}
