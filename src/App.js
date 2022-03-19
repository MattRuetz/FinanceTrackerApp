import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="*" element={<h1>404: NOT FOUND</h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
