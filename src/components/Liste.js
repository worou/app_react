import React from 'react';
import { FaRegCheckCircle, FaRegTimesCircle,FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Liste = (props) => {

    return ( 
         <> 
        
        <table className="table table-striped text-center">
            <thead className="table-dark">
                <tr>
                    <th>Id</th><th>Marque</th><th>Modele</th><th>Pays</th><th>Image</th><th>Prix</th><th>Disponible</th><th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.lines.map((line, index) =>{
                    return(
                        <tr key={index}>
                            <td>{line.id}</td>
                            <td>{line.marque}</td>
                            <td>{line.modele}</td>
                            <td>{line.pays}</td>
                            <td><img src={`images/${line.image}`} alt="" width="80"/></td>
                            <td>{line.prix}€</td>
                            <td>{
                                (line.disponible)
                                ?<FaRegCheckCircle className="text-success" size="24"/>
                                :<FaRegTimesCircle className="text-warning" size="24"/>
                                }
                            </td>
                            <td>
                                <button onClick={()=>{props.handleEdit(index)}} className="btn btn-success"><FaEdit/></button>
                            </td>
                            <td>
                                <button onClick={ ()=>{
                                                    // (window.confirm('Etes vous sûr de supprimer cette voiture'))
                                                    // ?props.handleDelete(index) 
                                                    // :console.log('annuler')}
                                                    if(window.confirm('Etes vous sûr de supprimer cette voiture')){

                                                        {props.handleDelete(index)}
                                                        toast.success('Suppression avec succès');
                                                       // toast('Suppression avec succès', {className:'bg-success text-white fw-bolder'})
                                                    }
                                                    
                                                    }   }
                                                 className="btn btn-danger">
                                    <FaTrashAlt/>
                                </button>

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <ToastContainer/>
        </>
     );
}
 
export default Liste;