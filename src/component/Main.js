import imgA from '../img/main_text01.png';
import imgB from '../img/jini_m01.png';

const Main = () =>{
  return(
    <div className="main row py-5 border-top ">
      <ul className="d-flex justify-content-center ">
        <li className="col-4 align-self-center firstview ">
          <img src={imgA} className="img-fluid" alt='testA' /></li>
        <li className="col-5 offset-md-1 align-self-end leftview">
        <img src={imgB} className="img-fluid"  alt='testB' /></li>
        
      </ul>
    </div>
  )
}

export default Main;