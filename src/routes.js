import NavBar from 'components/NavBar';
import Menu from 'pages/Menu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/cardapio' element={<Menu />} />
      </Routes>
    </Router>
  );
}