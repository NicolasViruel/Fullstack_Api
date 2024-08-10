import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

//importo React-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <Register />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Dashboard />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
