import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

// import './Style/Style.css'
import '../src/Style/Responsive.css'


import Work from'./Components/Work'
import Servises from './Components/Servises';
import Projects from './Components/Projects';
import Client_love from './Components/Client_love';
import Website_trafice from './Components/Website_trafice';
import Contect from './Components/Contect';
import Blogs from './Components/Blogs';
import Fother from './Components/Fother';
function App() {
  return (
 <>
 <Navbar/>
 <Work/>
 <Website_trafice/>

 <Servises/>
 <Projects/>
 <Client_love/>

 <Contect/>
 {/* <Blogs/> */}
 <Fother/>
 </>
  );
}

export default App;
