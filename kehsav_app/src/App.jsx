import { useState } from "react";

function App() {

  let [counter , setCounter] = useState(15); 

   const addValue = () =>{
     console.log('clicked' , counter);
     setCounter(counter+1);
   }

  const removeCounter = () =>{
     setCounter(counter -1);

  }
  return (
    <>
   <h1>Keshav App </h1>
   <h2>Counter value: 5 </h2>
      
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeCounter}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
   </>
  );
}

export default App;
