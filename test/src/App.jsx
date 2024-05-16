import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Home from './components/Home';
import Awards from './pages/Awards';
import Decorations from './pages/Decorations';
import Uniforms from './pages/Uniforms';
import Refreshment from './pages/Refreshment';

function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/awards" element={<Awards/>} />
            <Route path="/decorations" element={<Decorations/>} />
            <Route path="/uniforms" element={<Uniforms/>} />
            <Route path="/refreshment" element={<Refreshment/>} />
          </Routes>
        </BrowserRouter>
        {/* <Login/> */}
      </>
  )
}

export default App
