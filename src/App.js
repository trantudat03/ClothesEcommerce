
import './App.css';

import {BrowserRouter, } from 'react-router-dom'

import axios from 'axios';
import Routers from './Routers';
;

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routers/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
