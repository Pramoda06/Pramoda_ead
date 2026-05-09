import React from "react";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";

function Home(){
  return <h1>This is home page</h1>
}

function About(){
  return <h1>This is About page</h1>
}

function Contact(){
  return <h1>This is Contact page</h1>
}

export default function App()
{
  return(
    <BrowserRouter>
      <nav>
        <Link to='/Home'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    
    
    </BrowserRouter>
  );
}