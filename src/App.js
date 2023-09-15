import './App.css';
import HomePage from './Components/HomePage';
import SectionImg from './Components/SectionImg';
import SectionInfo from './Components/SectionInfo';
import Footer from './Components/Footer';
import SectionProyect from './Components/SectionProyect';

function App() {
  return (
    <div className="App">
     <HomePage/>
     <SectionImg/> 
     <SectionInfo/>
     <SectionProyect/>
     <Footer/>
    </div>
  );
}

export default App;
