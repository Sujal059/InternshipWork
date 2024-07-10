
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile';

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Register />  } />
          <Route path="/login" element={ <Login />  } />
          <Route path="/profile" element={ <Profile />  } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
