import React from 'react';


function App() {
  return (
    <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    
        <button className="navbar-toggler" type ="button" data-toggle="collapse"
            data-target="#navbarMainToggle" aria-controls="navbarMainToggle" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> 

        <a className="navbar-brand" href="#"><i className="fas fa-cog"></i>&nbsp; DEV</a>

         

        <div className="collapse navbar-collapse" id="navbarMainToggle">

            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Channel</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>
            <form className="form-inline" >
              <div className="input-group">
                <div class="input-group-prepend">
                    <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username"></input>
              </div>
              <button className="btn btn-outline-success m-1" type="submit">Login</button>
            </form>

        </div>
        
      
    </nav>
      

    

    </div>
  );
}

export default App;
