
import './App.css';
import image from './assets/images.png'
import Formulaire from './components/Formulaire';
function App() {
  return (
    <div className="container mt-3">
      <div className='row'>
        <div className='col-md-5'>
          <Formulaire/>
        </div>
        <div className='col-md-7 my-auto'>
          <img  className='img-fluid w-100' src={image} alt=""/>

        </div>
      </div>
     
    </div>
  );
}

export default App;
