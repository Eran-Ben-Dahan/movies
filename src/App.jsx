import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
//  import LoaderSpinner from "./components/LoaderSpinner";
import TopNav from "./components/nav/TopNav";
import About from "./pages/About/About.jsx";
import Favorites from "./pages/Favorites/Favorites";
import MovieDetails from "./pages/MovieDetails/MovieDetails ";
import Movies from "./pages/Movies/Movies";
import Home from './pages/Home/Home';
import { useSelector } from "react-redux";
import Footer from "../src/Footer/Footer.jsx";
import { ToastContainer } from "react-toastify";
import Comments from "./pages/Comments/Comments";
 import ScrollToTop from './/components/ScrollToTop/ScrollToTop'


// import TopNav2 from "./components/nav/TopNav2";
function App() {

  // once the app is loaded, fetch the movies once.
  const isDark = useSelector((state)=> state.theme.isDark)//מצב התחלתי של ISDARK INITIALSTATE
  return (
    
    <div className={ `app ${isDark ? "light" : "dark"}`}>
      <TopNav/>
      {/* <TopNav2/> */}
      {/* <LoaderSpinner/> */}
      <div className="app-wrapper">
        <ScrollToTop/>
      <Routes >
        <Route path="/home" element={<Home/>} />
        <Route path = "/" element={<Navigate to="/home"/>}/>
        <Route path="/movies/:genre" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/movie/:movieId" element={<MovieDetails/>} />
        <Route path="/comments" element={<Comments/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
