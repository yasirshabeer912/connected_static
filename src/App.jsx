
import React from 'react';
import './App.css';
import {} from 'react-router-dom'
import { BrowserRouter as Router,Routes,Link,Route } from 'react-router-dom';
import Home from './Home';
import About from './components/Sidebar';
function App() {
  return (
    <>
      <Router>
        {/* <Link to="/about">SideBar</Link>
        <Link to="/">Home</Link> */}
        <Routes>  
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
