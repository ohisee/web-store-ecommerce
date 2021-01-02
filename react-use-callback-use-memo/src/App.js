/**
 * @fileoverview showing how to use useCallback 
 * 
 * this is used to prevent any inline functions inside a functional component 
 * to be instantiated multiple times upon each re-render 
 */
import { useState, useCallback, useMemo } from "react";
import './App.css';

const functions = new Set();
functions.clear();

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const logName = useCallback(() => console.log("logname"), []);

  // functions.add(logName);
  functions.add(incrementCount1);
  functions.add(incrementCount2);

  console.log(functions);
  console.log("render");

  const doSomethingComplicated = useMemo(() => {
    console.log("I am computing something complex");
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  }, [count1]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Count1: {count1}</div>
        <button onClick={incrementCount1}>Increment count1</button>
        <div>Count2: {count2}</div>
        <button onClick={incrementCount2}>Increment count2</button>
        <button onClick={logName}>Log name</button>
        <div>Complex value: {doSomethingComplicated}</div>
      </header>
    </div>
  );
}

export default App;
