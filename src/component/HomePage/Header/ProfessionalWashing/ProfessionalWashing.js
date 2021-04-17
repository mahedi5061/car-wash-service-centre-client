import React from 'react';
import washImg from '../../../../images/washer.png';
import './ProfessionalWashing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const ProfessionalWashing = () => {

    return (
      <section  className="row mt-5">
     
    <div className="col-md-4 offset-md-1">
    <h2 className="professional">Professional washing and<br></br> cleaning of your car</h2><br></br>
    <p className="paragraph text-secondary">Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam lobortis est..</p><br></br>
    <h4 className="call">Call for book: <span className="number">02-22558</span></h4><br></br>
    <button className="btn-design"> <span>Read More </span><FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon></button>
   
</div>
      <div className="d-flex col-md-6 ms-5 justify-content-right">
        <img src={washImg} style={{width:"1400px"}}></img>
      </div>

      </section>
    );
};

export default ProfessionalWashing;