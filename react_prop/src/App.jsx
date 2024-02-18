import { useState } from "react";
import Card from "./components/Card";

function App() {

const [color, setColor] = useState("olive");

//  let myObj = {
//     username: 'keshav',
//     age: '24'
//  }

  return (
     <>
     <h1>Hello</h1>
    <div className="w-full h-screen duration-200">
            style={{backgrroundColorr: color}}
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
               <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
                  Test
               </div>
            </div>
            
    </div>
      {/* /* <h1 className='text-center
       bg-green-400 text-black 
       p-4 rounded-xl mb-4'>Tailwind Test</h1>
       <Card username = 'codeReact' btnText="clickMe"/>
       <Card username = "Keshav" btnText="VisitMe"/> */}

       </>
  
  )
};

export default App;
