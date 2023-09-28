import './App.css';
import Home from './components/Home';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="container container-fluid">
      <Routes>
          
      <Route path="/" element={<Home />} exact />

      </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
