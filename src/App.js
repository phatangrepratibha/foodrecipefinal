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
      <Route path="/bibimbap" element={<Bibimbap/>}/>
      <Route path="/gimbap" element={<Gimbap/>}/>
      <Route path="/bulgogi" element={<Bulgogi/>}/>
     </Routes>
     <Footer/>
    
     
    </div>
  );
}

export default App;
