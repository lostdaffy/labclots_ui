import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Sidebar from "./components/layout/Sidebar/Sidebar.jsx";
import TopBar from "./components/layout/Topbar/topBar.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import VerifyUser from "./pages/VerifyUser/VerifyUser.jsx";

import Analysis from "./pages/Dashboard/Analysis/Analysis.jsx";
import AddPatient from "./pages/Dashboard/AddPatient/AddPatient.jsx";
import AddTest from "./pages/Dashboard/AddTest/AddTest.jsx";
import AddResults from "./pages/Dashboard/AddResults/AddResults.jsx";
import PatientList from "./pages/Dashboard/PatientList/PatientList.jsx";
import PaymentReceipt from "./pages/Dashboard/PatientReceipt/PaymentReceipt.jsx";
import Preciption from "./pages/Dashboard/Preciption/Preciption.jsx";

import useAuthStore from "./store/authStore.js";
import LabProfile from "./pages/Dashboard/LabProfile/LabProfile.jsx";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/user-login" replace />;
  }

  if (isAuthenticated && !user?.isVerified) {
    return <Navigate to="/verify-user" replace />;
  }

  return children;
};

// Redirect Authenticated User
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/analysis" replace />;
  }

  return children;
};

// Dashboard Layout Wrapper
const DashboardLayout = ({ children }) => (
  <>
    <TopBar />
    <div className="d-flex">
      <Sidebar />
      {children}
    </div>
  </>
);

function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Routes>
      {/* Public Routes */}
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

      {/* Auth Routes */}
      <Route
        path="/user-login"
        element={
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>
        }
      />
      <Route
        path="/user-register"
        element={
          <RedirectAuthenticatedUser>
            <Register />
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

      {/* Protected Dashboard Routes */}
      <Route
        path="/analysis"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Analysis />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/add-test"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddTest />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/add-patient"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddPatient />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/add-results/:id"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddResults />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/patient-list"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <PatientList />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/preciption/:id"
        element={
          <ProtectedRoute>
            <Preciption />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/payment-receipt/:id"
        element={
          <ProtectedRoute>
            <PaymentReceipt />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/Lab-Profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <LabProfile />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
