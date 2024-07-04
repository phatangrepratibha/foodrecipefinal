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



function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <Land/> */}

     <Routes>
      <Route path="/" element={<Land/>}/>
      <Route path="/recipe" element={<Recipe/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/kimchi" element={<Kimchi/>}/>
      <Route path="/ramen" element={<Ramen/>}/>
      <Route path="/tteo" element={<Tteo/>}/>
     </Routes>
     <Footer/>
    
    
     
    </div>
  );
}

export default App;
