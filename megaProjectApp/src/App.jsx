
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth";
import {login,logout } from './store/authSlice'
import { Footer, Header } from './Index.jsx';
import {Outlet} from 'react-router-dom';
function App() {

  //console.log(import.meta.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData})) // data pass from authSlice userData we create 
        } else {
          dispatch(logout())
        }
      })

      //.catch()
      .finally(() => setLoading(false)
      ) // finally means run hoga hii hoga
  }, [])

 

  return !loading ?  (
    <div className='min-h-screen flex flex-wrap
     content-between
      bg-gray-400'>
      <div className='w-full block'>
         <Header/>
         <Footer/>
          <main>
            {/* <Outlet/> */}
          </main>
      </div>
   </div>
  ):null
}

export default App;
