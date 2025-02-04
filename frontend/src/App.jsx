import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp'
import './App.css';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
// import MotorControl from './pages/motor/MotorControl';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={"/login"} />}/>
        <Route path='/login' element={ authUser ? <Navigate to="/" /> :  <Login /> }/>
        <Route path='/signup' element={ authUser ? <Navigate to="/" /> : <SignUp /> }/>
        {/* <Route path="/motor" element={<MotorControl />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
