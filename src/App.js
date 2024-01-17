import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Work from'./Components/Work'
import Servises from './Components/Servises';
import Projects from './Components/Projects';
import Client_love from './Components/Client_love';
import Website_trafice from './Components/Website_trafice';
function App() {
  return (
 <>
 {/* <Navbar/> */}
 <Work/>

 <Servises/>
 <Projects/>
 <Client_love/>
 <Website_trafice/>
 
 </>
  );
}

export default App;
