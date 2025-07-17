// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Register from './Pages/Register';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ correct

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./component/Navbar"; // ✅ Import Navbar

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* ✅ Wrap all with context */}
      <Router>
        {/* ✅ Navbar shown on all pages */}
        <Navbar />
        <Routes>
          {/* 👇 Default route: show Home */}
          <Route path="/" element={<Home />} />

          {/* 👇 Login page */}
          <Route path="/login" element={<Login />} />

          {/* 👇 Register page */}
          <Route path="/register" element={<Register />} />

          {/* 👇 Optional: Home with /home path too */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
