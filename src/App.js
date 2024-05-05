import { useState, useEffect } from 'react';
import './App.css'; 

import BotCollection from './components/BotCollection.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import BotDetails from './components/BotDetails.js';






function App() {
  const [bot, setBot] = useState([])


  const fetchData = () =>{fetch('http://localhost:3000/bots')
   .then(resp => resp.json())
   .then(data => setBot(data))
   .catch(err => console.log(err))}
    useEffect(() => {
      fetchData()
    }, []);
  // function fetchData() {
  //   fetch('http://localhost:3000/bots')
  //     .then(resp => resp.json())
  //     .then(data => setBots(data))
  //     .catch(err => console.log(err))
  // }
  // useEffect(() => {
  //   fetchData()
  // }, []);



  return (
    <div className="App">
      
      <Router>
    
       <Routes>
      <Route path="/" element={<BotCollection props={bot} />} />
      <Route path='/details/:id' element={<BotDetails props={bot}/>}/>
      </Routes>
      </Router>

      
      
      
      
    </div>
  );
}

export default App;
