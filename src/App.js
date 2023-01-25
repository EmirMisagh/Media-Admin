import React, { Suspense, lazy, useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";

const Home = lazy(() => import('./Pages/Home'))
const ListUsers = lazy(() => import('./Pages/ListUsers'))

function App() {
  return (
            <Router>
    <div className="App container-fluid ">
      <Topbar />
      <div className="container-fluid p-0 mt-0">
        <div className="row p-0">
          <div className="col-2 col-md-3 p-0">
            <Sidebar />
          </div>
          <div className="col-10 col-md-9 mt-4">
              <Suspense >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Users" element={<ListUsers />} />
                </Routes>
              </Suspense>
          </div>
        </div>
      </div>
    </div>
            </Router>
  );
}

export default App;
