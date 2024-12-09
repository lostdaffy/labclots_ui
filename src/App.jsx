import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer.jsx";
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import AddPatient from "./pages/Dashboard/AddPatient.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Sidebar from "./pages/Dashboard/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import VerifyUser from "./pages/VerifyUser/VerifyUser.jsx";
import useAuthStore from "./store/authStore.js";

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (!isAuthenticated) {
      return <Navigate to="/user-login" replace />;
    }

    if (isAuthenticated && !user.isVerified) {
      return <Navigate to="/verify-user" replace />;
    }

    return children;
  };

  const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (isAuthenticated && user.isVerified) {
      return <Navigate to="/dashboard" replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />

      <Route
        path="/user-login"
        element={
          <RedirectAuthenticatedUser>
            <>
              <Login />
            </>
          </RedirectAuthenticatedUser>
        }
      />

      <Route
        path="/dashboard"
        element={
          // <ProtectedRoute>
            <>
              <div className="d-flex">
                <Sidebar />
                <Dashboard />
              </div>
            </>
          // </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/add-patient"
        element={
          // <ProtectedRoute>
            <>
              <div className="d-flex">
                <Sidebar />
                <AddPatient /> 
              </div>
            </>
          // </ProtectedRoute>
        }
      />

      <Route
        path="/user-register"
        element={
          <RedirectAuthenticatedUser>
            <>
              <Register />
            </>
          </RedirectAuthenticatedUser>
        }
      />

      <Route
        path="/verify-user"
        element={
          <RedirectAuthenticatedUser>
            <>
              <Navbar />
              <VerifyUser />
              <Footer />
            </>
          </RedirectAuthenticatedUser>
        }
      />
    </Routes>
  );
}

export default App;
