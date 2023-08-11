import { useState } from "react";
import {Form} from "./Form";
import { currencys } from "./currencys";
import "./App.css"
function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencys.find(({short}) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }
  return (
    <div className="app">
      <Form 
      result={result} 
      calculateResult={calculateResult} 
      />
    </div>
  );
}

export default App;
