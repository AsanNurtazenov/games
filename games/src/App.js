import React, { Component, useState } from 'react';
import Choice from './components/Choice'
import Header from './components/Header';
import { BrowserRouter, HashRouter, Routes, Route, NavLink, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import We from './components/We';
import GameCard from './components/Games/GameCard/GameCard';
import MathGame from './components/Games/Math/MathGame';
import Numbers from './components/Games/Numbers/Numbers';
import Tags from './components/Games/Tags/Tags';
import GameTable from './components/Games/GameTable/GameTable';
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Header />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<We /> }/>
        </Routes>
        <Routes>
        <Route path='/' element={ <Choice />} />
        <Route path='/tags' element={<Tags/>}/>
        <Route path='/numbers' element={<Numbers />}/>
        <Route path='/gametable' element={ <GameTable />} />
        <Route path='/gamecard' element={<GameCard />}/>
        <Route path='/math' element={<MathGame />}/>

      </Routes>
        
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}


export default App;
