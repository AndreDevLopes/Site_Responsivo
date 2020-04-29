import React from 'react';
import './App.css'


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
                <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username"></input>
              </div>
              <button className="btn btn-outline-success m-1" type="submit">Login</button>
            </form>

        </div>
        
      
    </nav>

      <section className="container p-2">

      <ul className="list-unstyled">
        <li className="media mt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Minha imagem</h5>
            é simplesmente uma simulação de texto da indústria
             tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI.
          </div>
        </li>
        <li className="media mt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Minha imagem</h5>
            é simplesmente uma simulação de texto da indústria
             tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI.
          </div>
        </li>
        <li className="media mt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Minha imagem</h5>
            é simplesmente uma simulação de texto da indústria
             tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI.
          </div>
        </li>
        <li className="media mt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Minha imagem</h5>
            é simplesmente uma simulação de texto da indústria
             tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI.
          </div>
        </li>
        <li className="media mt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Minha imagem</h5>
            é simplesmente uma simulação de texto da indústria
             tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI.
          </div>
        </li>
        <li className="media mt-2">
          <img src="http://via.placeholder.com/150/771796" alt="" className="mr-3"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Minha imagem</h5>
            é simplesmente uma simulação de texto da indústria
             tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI.
          </div>
        </li>
      </ul>

      </section>


    <footer>
        <div className=" footer bg-dark text-light text-center">
        <div className="container col-6 col-lg-4 d-flex pt-3 justify-content-around ">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-whatsapp-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram-square"></i>

        </div>
        
      </div>
    </footer>
    
      

    

    </div>
  );
}

export default App;
