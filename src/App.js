import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import ForeotPassword from './pages/ForeotPassword';
import Ticket from './pages/Ticket'
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App">

       <Routes>
       {/* <Route path="/Signup" element={<Signup />} /> */}
        <Route path="/ForeotPassword" element={<ForeotPassword />} />
        <Route path="/ticket" element={<Ticket />} />

    </Routes>
{/* <Ticket/> */}
     <Login/>
    </div>
  );
}

export default App;
