import logo from './logo.svg';
import './App.css';
import Card from './Components/Card.js'
import Navigation from './Components/Navigation.js';
import Header from './Components/Header.js';

//Hi
function App() {
  
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Card />
    </div>
  );
}

export default App;
