import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
  return <p>Esta es la app de curso de fullstack</p>
}


function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando en'></Mensaje>
      <Mensaje color='green' message=' un curso de react' />
      <Description></Description>

    </div>
  );
}

export default App;
