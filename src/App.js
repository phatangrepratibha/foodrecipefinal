import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Land from './components/Land';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Recipe from './components/Recipe';
import Register from './components/Register';
import Login from './components/Login';
import Kimchi from './components/Kimchi';
import Ramen from './components/Ramen';
import Tteo from './components/Tteo';
import Bibimbap from './components/Bibimbap';
import Gimbap from './components/Gimbap';
import Bulgogi from './components/Bulgogi';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useCallback, useEffect, useState } from 'react';


function App() {
  const [auth,setauth]=useState(false);
  const [auth1,setauth1]=useState(true);

  const isLoggedIn=async()=>{
    try{
      const res=await fetch('/logout',{
          method:"GET",
          headers:{
              Accept:"application/json",
              ContentType:"application/json"
          },
          credentials:"include"
      });

      if(res.status===200)
      {
        setauth(true)
        setauth1(false)
      }

      if(res.status===401)
        {
          setauth(false)
          setauth1(true)
        }

    }catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>{
    isLoggedIn();
  },[]);

  return (
    <div className="App">
      <Navbar auth={auth}/>
     
     {/* <Land/> */}

     <Routes>
      <Route path="/" element={<Land/>}/>
      <Route path="/recipe" element={<Recipe/>} />
      <Route  path="/register" element={<ProtectedRoute auth={auth1}>
                <Register/>
        </ProtectedRoute>}/>
      <Route  path="/login" element={<ProtectedRoute auth={auth1}>
                  <Login/>
      </ProtectedRoute>}/>
      <Route path="/kimchi" element={<Kimchi/>}/>
      <Route path="/ramen" element={<Ramen/>}/>
      <Route path="/tteo" element={<Tteo/>}/>
      <Route path="/bibimbap" element={<Bibimbap/>}/>
      <Route path="/gimbap" element={<Gimbap/>}/>
      <Route path="/bulgogi" element={<Bulgogi/>}/>
      <Route  path="/logout" element={<ProtectedRoute auth={auth1}>
        <Logout/>
        </ProtectedRoute>}/>
     </Routes>
     <Footer/>
    
     
    </div>
  );
}

export default App;
