import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Category from './components/Сategory';



function App() {

  let [greetings, setGreetings] = useState('HELLO');
  


  // function startWorkHandler(){ 
  //   if (greetings){
  //     console.log(setGreetings('8888'))
  //   } else {
  //     return greetings
  //   }
  //   };
    

  return (
    <div>
      <Greetings/>
    </div>
  )
}

export default App;
