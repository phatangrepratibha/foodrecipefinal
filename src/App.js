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
      const res=await fetch('/auth',{
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
      <Navbar auth={auth1}/>
     
     {/* <Land/> */}

     <Routes>
      <Route path ="/" exact element={<Land/>}/>
      <Route path ="/recipe" exact element={<Recipe/>}/>
      <Route path ="/register" exact element={<Register/>}/>
      <Route path ="/login" exact element={<Login/>}/>
      <Route path ="/kimchi" exact element={<Kimchi/>}/>
      <Route path ="/ramen" exact element={<Ramen/>}/>
      <Route path ="/tteo" exact element={<Tteo/>}/>
      <Route path ="/bibimbap" exact element={<Bibimbap/>}/>
      <Route path ="/gimbap" exact element={<Gimbap/>}/>
      <Route path ="/bulgogi" exact element={<Bulgogi/>}/>
      <Route path ="/logout" exact element={<Logout/>}/>
     </Routes>
     <Footer/> 
    </div>
  );
}

export default App;
