import logo from './logo.svg';
import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Link from './components/Link';
import Button from './components/Button';
function App() {
  let urls=["Services","Projects","About"]
  return (
    <>
    <div className="App">
     <Logo name={"LOGOBAKERY"}/>
    
    <div style={{display:"flex"}}> {urls.map((link)=>(
       <Link name={link}/>
     ))}
    </div>
    <Button name={"Contact"}/>

    </div>
    </>
  );
}

export default App;
