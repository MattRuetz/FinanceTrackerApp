import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
// hooks
import { useAuthContext } from './hooks/useAuthContext';
// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
    const { authIsReady } = useAuthContext();

    return (
        <div className="App">
            {authIsReady ? (
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path="/" element={<Home />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<h1>404: NOT FOUND</h1>} />
                    </Routes>
                </Router>
            ) : (
                <>
                    <Spinner />
                </>
            )}
        </div>
    );
}

export default App;
