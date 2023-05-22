import NavBar from 'components/NavBar';
import Menu from 'pages/Menu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element ={<Header />}>
            <Route index element={<Start />} />
            <Route path='cardapio' element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}