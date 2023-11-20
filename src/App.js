import Navbar from './Link/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>  
    </div>
  );
}

export default App;
