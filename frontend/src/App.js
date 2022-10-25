import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Create from './pages/Create';
import Delete from './pages/Delete';
import History from './pages/History';
import Home from './pages/Home';
import Update from './pages/Update';

function App() {
  return (
    <div className="app">  
      <Header />
      <div>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/:id" element={<History />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
