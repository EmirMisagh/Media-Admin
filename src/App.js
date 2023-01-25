import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="Pages">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
