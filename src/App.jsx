
import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Store from "./pages/Store";
import { useState } from "react";


function App(){

  // {/* yeah js ky liya fit hai lakin react is ko nhi manta  */}
  // let text = 'Hi Reactjs'
  // function changetext(){
  //   text='The Text has been changed'
  // }

  let [text,changetext]=useState("Hi Reactjs")

  let[count,setcount]=useState(0)

  let [dark,setdark]=useState(false)
 
  // practice for ease
  let [val,inccount]=useState(0)
  let [vals,deccount]=useState(0)

  let [showpass,setshowpass]=useState(false)

  let [sub,setsub]=useState(false)

  
  return(

    <div className={dark ?'bg-black text-white' : 'bg-white text-black'}>

    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
         <Route path='/store' element={<Store />} />

    </Routes>
    
    </BrowserRouter>
   
   
   <h1 className="text-center font-bold text-2xl">Hook Use-state Use Here </h1>


    <h1>{text}</h1>

    {/* yeah js ky liya fit hai lakin react is ko nhi manta  */}
   {/* <button className="bg-amber-200 p-2 rounded-lg " onclick={changetext}>Change Text</button>
   */}

  <button className="bg-amber-300 p-4 rounded-lg"
   onClick={()=>{
     changetext("Value changed by usestate")} }>Click</button> 

<br/>
   <button className="bg-blue-300 p-4 rounded-lg m-4" 
   onClick={()=> setcount(count+1)}
    >Count:{count}</button>

    <br />

      <button className="bg-gray-500 p-4 m-4 rounded-lg " 
      onClick={()=>setdark(!dark)} >Toggle Dark Mode</button>


      {/* practice ques for my ease  */}
       {/* increment  */}
    <button className="p-2 bg-amber-600 rounded-4xl"
     onClick={()=> inccount(val+1)}>CLICK for INC:{val}</button>
   {/* decrement  */}
     <button className="p-2 bg-amber-600 rounded-4xl"
     onClick={()=> deccount(vals-1)}>Click For dec{vals}</button>
<br />
    {/* hide/show password  */}
     <input className="border-2 border-gray-400" type={showpass ? 'text' :'password'} placeholder="Username " />
     <button className="bg-blue-200 p-2 ml-4 "
      onClick={()=> setshowpass(!showpass)}>Hide/Show</button>

<br />

   <button className="bg-slate-900 font-semibold p-3 ml-4 mb-2 rounded-3xl text-white" 
   onClick={()=> setsub(!sub) }>
    {sub ?'Subscribed✔' : 'Subscribe'}
   </button>



    
    </div>
  )
  }

export default App;