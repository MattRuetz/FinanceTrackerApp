import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
// hooks
import { useAuthContext } from './hooks/useAuthContext';
// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// loading messages
import msgs from './data/messages.json';

function App() {
    const { authIsReady } = useAuthContext();

    return (
        <div className="App">
            {authIsReady ? (
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route
                            path="*"
                            element={<h1>404: NOT FOUND</h1>}
                        ></Route>
                    </Routes>
                </Router>
            ) : (
                <>
                    <h2 className="loading-text">
                        <em>{msgs[Math.floor(Math.random() * 30)]}</em>
                    </h2>
                    <Spinner />
                </>
            )}
        </div>
    );
}

export default App;
