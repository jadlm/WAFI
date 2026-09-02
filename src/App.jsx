import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* We will add other routes in next phases */}
          <Route path="boutique" element={<div className="min-h-screen flex items-center justify-center font-heading text-2xl text-charcoal">Page Boutique (En cours)</div>} />
          <Route path="a-propos" element={<div className="min-h-screen flex items-center justify-center font-heading text-2xl text-charcoal">Page À propos (En cours)</div>} />
          <Route path="contact" element={<div className="min-h-screen flex items-center justify-center font-heading text-2xl text-charcoal">Page Contact (En cours)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
