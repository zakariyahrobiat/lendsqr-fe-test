import React from "react";
import Login from "./Components/login";
import Dashboard from "./Pages/dashboard";
import Users from "./Pages/users";
import UsersDetail from "./Pages/usersDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/detail" element={<UsersDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
