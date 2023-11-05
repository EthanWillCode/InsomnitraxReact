import logo from './logo.svg';
import './App.css';
import Card from './Components/Card.js'
import Navigation from './Components/Navigation.js';
import Header from './Components/Header.js';
import {homeCards} from './CardInfo/HomepageCards.js';

//Hi
function App() {
  
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div>
        {
          homeCards.map(homeCard => {
            <Card cardObject ={homeCard} />
          })
        }
      </div>

    </div>
  );
}

export default App;
