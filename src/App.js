import React, { Suspense, lazy, useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import FuncyLoding from './Components/FuncyLoding';

const Home = lazy(() => import('./Pages/Home'))
const Upload = lazy(() => import('./Pages/Upload'))
const Betting = lazy(() => import('./Pages/Betting'))
const ListUsers = lazy(() => import('./Pages/Users/ListUsers'))
const User = lazy(() => import('./Pages/Users/User'))
const NewUser = lazy(() => import('./Pages/Users/NewUser'))
const ProductsList = lazy(() => import('./Pages/ProductsList'))
const Login = lazy(() => import('./Pages/Login'))
const BettingList = lazy(() => import('./Pages/Bettingg/BettingList'))
const EditBetting = lazy(() => import('./Pages/Bettingg/EditBetting'))
const NewBetting = lazy(() => import('./Pages/Bettingg/NewBetting'))
const NewsList = lazy(() => import('./Pages/News/NewsList'))
const EditNews = lazy(() => import('./Pages/News/EditNews'))
const NewNews = lazy(() => import('./Pages/News/NewNews'))
const LeagueList = lazy(() => import('./Pages/League/LeagueList'))
const LeagueEdit = lazy(() => import('./Pages/League/LeagueEdit'))
const LeagueNew = lazy(() => import('./Pages/League/LeagueNew'))
const TeamList = lazy(() => import('./Pages/Team/TeamList'))
const TeamEdit = lazy(() => import('./Pages/Team/TeamEdit'))
const TeamNew = lazy(() => import('./Pages/Team/TeamNew'))
const MatchList = lazy(() => import('./Pages/Matches/MatchList'))
const MatchEdit = lazy(() => import('./Pages/Matches/MatchEdit'))
const MatchNew = lazy(() => import('./Pages/Matches/MatchNew'))
const CatagoryList = lazy(() => import('./Pages/Catagory/CatagoryList'))
const SportNew = lazy(() => import('./Pages/Catagory/SportNew'))



function App() {
  const [LoginState, setLoginState] = useState(false)
  // useMemo(() =>{
  //   if(LoginState == false){
  //     window.location.replace('/login');
  //   }
  // },[])
  return (
  <Router>
    <Suspense fallback={<FuncyLoding />} >
      <div className="App container-fluid ">
        <Routes>
          <Route path="/login" element={''} />
          <Route path="*" element={<Topbar />} />
        </Routes>
        <div className="container-fluid p-0 mt-0">
          <div className="row p-0">
            <div className="col-2 col-md-3 p-0">
              <Routes>
                <Route path="/login" element={''} />
                <Route path="*" element={<Sidebar />} />
              </Routes>
            </div>
            <div className="col-10 col-md-9 mt-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/betting" element={<Betting />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Users" element={<ListUsers />} />
                <Route path="/Users/newuser" element={<NewUser />} />
                <Route path="/Users/user/:id" element={<User />} />
                <Route path="/productslist" element={<ProductsList />} />
                <Route path="/newslist" element={<NewsList />} />
                <Route path="/newslist/edit/:id" element={<EditNews />} />
                <Route path="/newslist/new" element={<NewNews />} />
                <Route path="/bettinglist" element={<BettingList />} />
                <Route path="/bettinglist/edit/:id" element={<EditBetting />} />
                <Route path="/bettinglist/new" element={<NewBetting />} />
                <Route path="/leaguelist" element={<LeagueList />} />
                <Route path="/leaguelist/edit/:id" element={<LeagueEdit />} />
                <Route path="/leaguelist/new" element={<LeagueNew />} />
                <Route path="/teamlist" element={<TeamList />} />
                <Route path="/teamlist/edit/:id" element={<TeamEdit />} />
                <Route path="/teamlist/new" element={<TeamNew />} />
                <Route path="/matchlist" element={<MatchList />} />
                <Route path="/matchlist/edit/:id" element={<MatchEdit />} />
                <Route path="/matchlist/new" element={<MatchNew />} />
                <Route path="/catagorylist" element={<CatagoryList />} />
                <Route path="/catagorylist/sport/new" element={<SportNew />} />
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
