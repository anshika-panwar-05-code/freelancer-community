// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar
import Forum from './pages/Forum';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Content from './pages/content';
import Footer from './components/Footer';
import Fpage from './pages/Fpage';
// Correct path and casing

// import Login2 from './pages/Login2';

/
function App() {
    return (
        <Router>
            <Navbar /> 
            <Routes>
               
               
            <Route path="/" element={<Home />} />
                <Route path="/forums" element={<Forum />} />
                <Route path="/chat" element={<Chat />} />
              
                <Route path="/content" element={<Content />} />
                <Route path="/footer" element={<Footer />} />
                <Route path ="/Fpage" element={<Fpage/>} /> 
                
                
              
                

            </Routes>
         
             <Forum/>
            <Chat/>
            <Fpage/>
        
            <Content/>
            <Footer/>  
            
         
           

        </Router>
    );
}

export default App;


