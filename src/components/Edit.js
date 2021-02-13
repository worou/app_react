import React, { Component } from 'react';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        
        this.initState = { 
            id: -1,
            marque:"",
            modele:"",
            pays:"",
            image:"",
            prix:0,
            disponible:false
           
         }

         this.state = this.initState;
    }

    componentDidMount = ()=>{
        this.setState(this.props.autoShared);
        console.log(this.props.autoShared);
    }

    // componentDidUpdate = ()=>{
    //     const id  = this.props.autoShared.id;
    //     if(id !== this.state.id){
            
    //         this.setState(this.props.autoShared);
    //     }
    //     console.log(this.props.autoShared);
    // }

    handleChange = (e)=>{
       
        const {name, type, checked, value} = e.target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({[name]:val});

    }
    handleUpdateSubmit = (e)=>{
        e.preventDefault();
        const img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
        const updateCar = {
            id: this.state.id,
            marque: this.state.marque,
            modele: this.state.modele,
            pays: this.state.pays,
            prix: this.state.prix,
            image: img,
            disponible: this.state.disponible
        }
        this.props.update(updateCar);
        toast('Voiture modifiée avec succès', {className:'bg-success text-white fw-bolder'});
    }
    render() {
        const {id, marque, modele, pays, prix, disponible} = this.state;
       
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center"> Formulaire d'édition</div>
                        <div className="card-body">
                        
                            <form className="row g-3 needs-validation" onSubmit={this.handleUpdateSubmit}>
                            <div className="col-md-2">
                                <label htmlFor="id" className="form-label">id</label>
                                <input type="text" readOnly className="form-control"  id="id" name="id" value={id} onChange={this.handleChange}  />
                               
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="marque" className="form-label">Marque</label>
                                <input type="text" className="form-control"  id="marque" name="marque" value={marque} onChange={this.handleChange}  placeholder="Entrer la marque" />
                               
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="modele" className="form-label">Modele</label>
                                <input type="text" className="form-control" id="modele"  name="modele" value={modele} onChange={this.handleChange} placeholder="Entrer le modèle" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="pays" className="form-label">Pays</label>
                                <input type="text" className="form-control" id="pays" name="pays" value={pays} onChange={this.handleChange} placeholder="Entrer le pays" />
                               
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prix" className="form-label">Prix</label>
                                <input type="number" className="form-control" id="prix" value={prix} onChange={this.handleChange}  name="prix" placeholder="Entrer le prix" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="prix" className="form-label">Image</label>
                                <input type="file" className="form-control" id="image" onChange={this.handleChange} name="image"  />
                            </div>
                            
                            <div className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="disponible" onChange={this.handleChange} name="disponible" checked={disponible} />
                                <label className="form-check-label" htmlFor="disponible">
                                    Disponible
                                </label>
                                
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-warning col-12" type="submit">Modifier</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/admin123/reload"> <FaRegHandPointLeft size="25"/> </Link>
                    </div>
                </div>
                <ToastContainer/>
            </>
          );
    }
}
 
export default Edit;