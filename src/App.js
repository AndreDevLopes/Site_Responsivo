import React from 'react';


function App() {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    
        

        <a className="navbar-brand" href="#"><i className="fas fa-cog"></i>&nbsp; DEV</a>

         <button className="navbar-toggler" type ="button" data-toggle="collapse"
            data-target="#navbarMainToggle" aria-controls="navbarMainToggle" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> 

        <div className="collapse navbar-collapse" id="navbarMainToggle">

            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Channel</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>

        </div>
        
      
    </nav>
      

    

    </div>
  );
}

export default App;
