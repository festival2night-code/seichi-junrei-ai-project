import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'

function App() {
    return (
        <div>
            
            <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
                <a href="/">Main Page</a> |{' '}
                <a href="/about">About</a> |{' '}
                <a href="/profile">Profile</a>
            </nav>

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default App