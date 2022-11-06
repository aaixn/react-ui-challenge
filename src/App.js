import './App.css';
import Login from './components/login/login';
import { Route, Routes, Link } from "react-router-dom";
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Link to=''></Link>
      <Routes>
        <Route path='/home' element={ <Welcome /> }></Route>
        <Route path='' element={ <Login /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
