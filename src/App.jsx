import './App.css';
import Navbar from './components/UI/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/UI/Footer';

function App() {
return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
)
}

export default App;