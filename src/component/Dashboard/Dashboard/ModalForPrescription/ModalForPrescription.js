import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)',
        transition: '0.3s',
        borderRadius: '15px'
        
    }
    
};
Modal.setAppElement('#root')

const ModalForPrescription = ({modalIsOpen, closeModal,selectedPatient}) => {
    const { register, handleSubmit, watch,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    console.log(selectedPatient)
    return (
        <div>
     

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
 
                    <div className="px-5 py-3">
                    {
                    selectedPatient && 
                    <div>
                        <div className="mb-3 mb-4 d-flex justify-content-between">
                        <span className="text-primary">{selectedPatient.name}</span>
                            <span>Gender : {selectedPatient.gender}</span>
                            <span>Age : {selectedPatient.age}</span>
                        </div>
                         <form className="row add-prescription" 
                         onSubmit={handleSubmit(onSubmit)}
                         >
                            <div className="col-12">
                                {errors.medicine && <span className="text-danger">Medicine Name must not empty ! <br/></span>}
                                {errors.doge && <span className="text-danger">Doge Name must not empty ! <br/> </span>}
                                {errors.days && <span className="text-danger">Days Must not empty ! <br/> </span>}
                            </div>
                            <input className="form-control col-6" ref={register({ required: true })} name="medicine" placeholder="Medicine Name" type="text"/>
                            <select ref={register({ required: true })}  className="form-control col-3" name="doge">
                                <option value="1 - 1 - 1">1 - 1 - 1</option>
                                <option value="1 - 0 - 1">1 - 0 - 1</option>
                                <option value="1 - 0 - 0">1 - 0 - 0</option>
                                <option value="1 - 1 - 0">1 - 1 - 0</option>
                                <option value="1 - 1 - 0">1 - 1 - 0</option>
                                <option value="0 - 1 - 1">0 - 1 - 1</option>
                                <option value="1 - 0 - 0">1 - 0 - 0</option>
                                <option value="0 - 0 - 1">0 - 0 - 1</option>
                            </select>
                            <input ref={register({ required: true })} name="days" className="form-control col-2" type="number" placeholder="Days"/>
                            <button type="submit" className="btn btn-primary col-1"><FontAwesomeIcon icon={faPlus}/></button>
                         </form>
                        
                       
                    </div>

                    }
                </div>
        </Modal>
    </div>
    );
};

export default ModalForPrescription;