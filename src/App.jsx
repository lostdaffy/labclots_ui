import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer.jsx";
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import VerifyUser from "./pages/VerifyUser/VerifyUser.jsx";
import useAuthStore from "./store/authStore.js";
import PaymentReceipt from "./pages/Dashboard/PatientReceipt/PaymentReceipt.jsx";
import Sidebar from "./components/layout/Sidebar/Sidebar.jsx";
import AddPatient from "./pages/Dashboard/AddPatient/AddPatient.jsx";
import AddResults from "./pages/Dashboard/AddResults/AddResults.jsx";
import AddTest from "./pages/Dashboard/AddTest/AddTest.jsx";
import PatientList from "./pages/Dashboard/PatientList/PatientList.jsx";
import TopBar from "./components/layout/Topbar/topBar.jsx";
import Analysis from "./pages/Dashboard/Analysis/Analysis.jsx";
import Preciption from "./pages/Dashboard/Preciption/Preciption.jsx";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

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
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/analysis" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

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

      {/* Login */}
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

      {/* /Login */}

      {/* User Register */}

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

      {/* /User Register */}

      {/* Verify User */}

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

      {/* /Verify User */}

      {/* Dashboard Protected Routes */}

      {/* Dashboard */}
      <Route
        path="/analysis"
        element={
          <ProtectedRoute>
            <>
              <TopBar />
              <div className="d-flex">
                <Sidebar />
                <Analysis />
              </div>
            </>
          </ProtectedRoute>
        }
      />

      {/* /Dashboard */}

      {/* Add Test */}

      <Route
        path="/dashboard/add-test"
        element={
          <ProtectedRoute>
            <>
              <TopBar />
              <div className="d-flex">
                <Sidebar />
                <AddTest />
              </div>
            </>
          </ProtectedRoute>
        }
      />

      {/* /Add Test */}

      {/* Add Patient */}

      <Route
        path="/dashboard/add-patient"
        element={
          <ProtectedRoute>
            <>
              <TopBar />
              <div className="d-flex">
                <Sidebar />
                <AddPatient />
              </div>
            </>
          </ProtectedRoute>
        }
      />

      {/* /Add Patient */}

      {/* Add Results */}

      <Route
        path="/dashboard/add-results/:id"
        element={
          <ProtectedRoute>
            <>
              <TopBar />
              <div className="d-flex">
                <Sidebar />
                <AddResults />
              </div>
            </>
          </ProtectedRoute>
        }
      />

      {/* /Add Results */}

      {/* Patient List */}

      <Route
        path="/dashboard/patient-list"
        element={
          <ProtectedRoute>
            <>
              <TopBar />
              <div className="d-flex">
                <Sidebar />
                <PatientList />
              </div>
            </>
          </ProtectedRoute>
        }
      />

      {/* /Patient List */}

      {/* Preciption */}

      <Route
        path="/dashboard/preciption/:id"
        element={
          <ProtectedRoute>
           <Preciption />
          </ProtectedRoute>
        }
      />

      {/* /Preciption */}

      {/* Payment Recipt */}

      <Route
        path="/dashboard/payment-receipt/:id"
        element={
          <ProtectedRoute>
           <PaymentReceipt />
          </ProtectedRoute>
        }
      />

      {/* /Payment Recipt */}

      {/* /Dashboard Protected Routes */}
    </Routes>
  );
}

export default App;
