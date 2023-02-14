import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
       <Navbar />
       
        <Routes>
         <Route path='/itemlistcontainer' element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
