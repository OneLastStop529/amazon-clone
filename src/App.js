import './App.css';
import Header from './Header/Header' 
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
          <div>
            <Header />
            <Checkout />
          </div>
        }/>
           
          
          <Route path="/" element={ 
            <div>
              <Header /> 
              <Home />
            </div> 
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
