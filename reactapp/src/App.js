import "./App.css";
import Login from './component/Login';
import Sign_Up from './component/Sign_Up';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
              
      <Routes>
        <Route path="/signup" element={<Sign_Up />}/>
      </Routes>
              
      <Routes>
        <Route path="/homepage" element={<home_page/>}/>
      </Routes>
              
    </Router>
  );
}


export default App;
