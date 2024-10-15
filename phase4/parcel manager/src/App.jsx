import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageParcels from "./components/Admin/ManageParcels";
import ProtectedRoute from "./components/Protectedroute";
import CustomerServiceDashboard from "./components/CustomerService/CustomerServiceDashboard";
import SendParcel from "./components/CustomerService/SendParcel";
import ViewParcel from "./components/CustomerService/ViewParcel";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import ViewCustomerParcels from "./components/Customer/ViewCustomerParcels";
import Footer from "./components/Footer";
function App() {
  const userRole = "customerService"; // Mock role for now
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["admin"]}
                element={<AdminDashboard />}
              />
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["admin"]}
                element={<ManageUsers />}
              />
            }
          />
          <Route
            path="/admin/parcels"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["admin"]}
                element={<ManageParcels />}
              />
            }
          />
          <Route
            path="/customer-service"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["customerService"]}
                element={<CustomerServiceDashboard />}
              />
            }
          />
          <Route
            path="/customer-service/send-parcel"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["customerService"]}
                element={<SendParcel />}
              />
            }
          />
          <Route
            path="/customer-service/view-parcels"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["customerService"]}
                element={<ViewParcel/>}
              />
            }
          />
          {/* Customer Routes */}
          <Route
            path="/customer"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["customer"]}
                element={<CustomerDashboard />}
              />
            }
          />
          <Route
            path="/customer/view-parcels"
            element={
              <ProtectedRoute
                userRole={userRole}
                allowedRoles={["customer"]}
                element={<ViewCustomerParcels />}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
