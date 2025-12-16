// src/App.jsx
import React from 'react';
import Navbar from './NavBar'; // <-- Import the component

function App() {
  return (
    // The Navbar is typically placed right at the top of the main container
    <div className="App"> 
      <Navbar /> 
      
      <main style={{ padding: '100px',  textAlign: 'center' }}>
       
        {/* Your "rect" component or other content */}
      </main>
    </div>
  );
}

export default App;