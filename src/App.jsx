import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import NotFound from './components/404';
function App() {

  return (
    <>


      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
    </>
  )
}

export default App
