import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import Work from'./Components/Work'
import Servises from './Components/Servises';
import Projects from './Components/Projects';
import Client_love from './Components/Client_love';
function App() {
  return (
 <>
 {/* <Navbar/> */}
 <Work/>

 <Servises/>
 <Projects/>
 <Client_love/>
 
 </>
  );
}

export default App;
