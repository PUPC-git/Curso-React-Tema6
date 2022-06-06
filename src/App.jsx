import logo from './logo.svg';
import './App.css';
import Vista from './views/Vista.view';
import ListaNumeros from './components/ListNumeros.component';
import Mensajes from './views/Mensajes/Mensajes.view';

let compra = ["Pan", "Guacamole", "Tomates", "Jamon"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Vista></Vista>
        <ListaNumeros data={compra}></ListaNumeros>
      </header>
      <div className="App-body">
        <Mensajes></Mensajes>
      </div>
    </div>
  );
}

export default App;
