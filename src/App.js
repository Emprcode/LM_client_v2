import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./components/auth/RequireAuth";
import BorrowedBooks from "./pages/borrowbooks/BorrowedBooks";
import Allbooks from "./pages/allbooks/Allbooks";
import Addbooks from "./pages/addbooks/Addbooks";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/settings/Setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* private route */}
          <Route
            path="/dashboard"
            element={
              // <RequireAuth>
              <Dashboard />
              // </RequireAuth>
            }
          />
          <Route
            path="/my-books"
            element={
              <RequireAuth>
                {" "}
                <BorrowedBooks />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/all-books"
            element={
              <RequireAuth>
                {" "}
                <Allbooks />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/add-books"
            element={
              <RequireAuth>
                {" "}
                <Addbooks />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                {" "}
                <Profile />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/setting"
            element={
              <RequireAuth>
                {" "}
                <Setting />{" "}
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
