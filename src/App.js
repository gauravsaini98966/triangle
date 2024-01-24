// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

// import './Style/Style.css'
import "../src/Style/Responsive.css";
import ContectUs_full from './Components/ContectUs_full'
import Work from "./Components/Work";
import Servises from "./Components/Servises";
import Projects from "./Components/Projects";
import Client_love from "./Components/Client_love";
import Website_trafice from "./Components/Website_trafice";
import Contect from "./Components/Contect";
import Blogs from "./Components/Blogs";
import Fother from "./Components/Fother";
import Locations from "./Components/Location";
import Web_dev from "./Components/Web_dev";
import Hero from "./Components/Hero";
import Technology from "./Components/technology";
import App_dev from './Components/App_dev'
import Digital_mar from './Components/Digital_Mar'
import Our_work from './Components/Our_Work'
import Location_map from './Components/Location_map'
import Portfolio from "./Components/Portfolio_img";

function App() {
  return (
    <>
      <Navbar />
      <Work />
      <Website_trafice />

      <Servises />
      <Projects />
      <Client_love />

      <Contect />
      <Blogs />
      <Locations />
     
      <Web_dev/>
      <Technology/>
      <App_dev/>
      <Digital_mar/>
      <Our_work/>
      <Location_map/>
      <ContectUs_full/>
      <Portfolio/>
      <Fother />
      {/* <Hero/> */}
    </>
  );
}

export default App;
