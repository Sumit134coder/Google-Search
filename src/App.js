import React,{useState} from "react";
import './global.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import{ Routes} from "./components/Routes";




function App() {

  const [darkTheme , setDarkTheme] = useState(false)

  return (
    <div className={darkTheme?'dark':""} >
      <div className='bg-gray-200 dark:bg-gray-900 dark:text-white min-h-screen'>
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
