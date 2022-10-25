import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Create from './pages/Create';
import Search from './pages/Search';
import History from './pages/History';
import Home from './pages/Home';
import Update from './pages/Update';
import './style/App.css';

function App() {
  return (
    <div className="app">  
      <Header />
      <div>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/:id" element={<History />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
