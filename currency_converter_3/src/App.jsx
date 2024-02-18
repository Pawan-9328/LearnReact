import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyInfo from './hooks/usecurrencyInfo';
function App() {
  
  const [amount, setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  // const  [convertedAmount, setConvertedAmount ] = useState(0)

  // const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  return (
    <>
    <h1>Run </h1>
     
    </>
  )
}

export default App
