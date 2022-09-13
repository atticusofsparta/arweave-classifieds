import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import ConnectButton from './components/Connect';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import Ads from './pages/Ads';


function App() {
  return (
   <div className="main">
    <Sidebar /> 
    <div className="display-container">
    <div className='search-connect-container'>
    <Searchbar /> <ConnectButton />
    </div>
    
     <Ads />

     </div>


   </div>
  );
}

export default App;
