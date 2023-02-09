import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './component/Navi';
import Main from './component/Main';
import Process from './component/Process';
import Portfolio from './component/Portfolio';
import Swiper from './component/Swiper';




function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Main></Main>
      <Swiper></Swiper>
      <Process id="precss" title="개발자연혁"></Process>
      <Portfolio dbobjkey="react"></Portfolio>
      <section style={{height:'100vh'}} id="portfolio" 
              className='border-top bg-dark'></section>
      <section style={{height:'100vh'}} id="contact" className='border-top'></section>
   
    </div>
  );
}

export default App;
