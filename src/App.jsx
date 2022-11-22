import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';


import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import Users from './pages/jsonplaceholder/Users';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Users />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
