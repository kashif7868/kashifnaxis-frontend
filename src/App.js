import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Preloader from './components/Preloader';
import AllPages from './components/AllPages';
import AuthPage from './components/auth/AuthPage';
import { AuthProvider } from './context/authContext';  // Import AuthProvider
import useNavigationLoader from './hooks/useNavigationLoader';
import BackgroundAnimation from './components/backgroundAnimation'; // Import BackgroundAnimation

const AppContent = () => {
  const loading = useNavigationLoader();

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BackgroundAnimation /> {/* Add the background animation here */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<AuthPage />} />
            <Route path="/*" element={<AllPages />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
