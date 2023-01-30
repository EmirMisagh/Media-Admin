import React, { Suspense, lazy, useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import FuncyLoding from './Components/FuncyLoding';

const Home = lazy(() => import('./Pages/Home'))
const ListUsers = lazy(() => import('./Pages/ListUsers'))
const User = lazy(() => import('./Pages/User'))

function App() {
  return (
  <Router>
    <Suspense fallback={<FuncyLoding />} >
      <div className="App container-fluid ">
        <Topbar />
        <div className="container-fluid p-0 mt-0">
          <div className="row p-0">
            <div className="col-2 col-md-3 p-0">
              <Sidebar />
            </div>
            <div className="col-10 col-md-9 mt-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Users" element={<ListUsers />} />
                  <Route path="/Users/user/:id" element={<User />} />
                </Routes>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  </Router>
  );
}

export default App;
