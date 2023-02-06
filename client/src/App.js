import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className='mainContainer'>
    <Sidebar />
      <Routes>

        <Route path='/' element={ <Home /> } />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
