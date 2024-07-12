
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile';
import VerifyEmail from './components/VerifyEmail';

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Register />  } />
          <Route path="/login" element={ <Login />  } />
          <Route path="/profile" element={ <Profile />  } />
          <Route path="/verificationConfirm" element={ <VerifyEmail />  } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
