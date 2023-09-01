import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import NewsPage from "./Pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route exact path="/:stateName" element={<NewsPage/>} />
        <Route exact path="/:stateName/:districtName" element={<NewsPage/>} />
        <Route exact path="/:stateName/:districtName/:constituencyName" element={<NewsPage/>} />
        <Route exact path="/:stateName/:districtName/:constituencyName/:mandalName" element={<NewsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
