import React, { Component } from 'react';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Ajout extends Component {
    constructor(props) {
        super(props);
        
        this.initState = { 
            marque:"",
            modele:"",
            pays:"",
            image:"",
            prix:0,
            disponible:false
           
         }

         this.state = this.initState;
    }

    handleChange = (e)=>{
       
        const {name, type, checked, value} = e.target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({[name]:val});

    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let img = '';
        if(this.state.image){

            img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
        }
        const newCar = {
            marque: this.state.marque,
            modele: this.state.modele,
            pays: this.state.pays,
            prix: this.state.prix,
            image: img,
            disponible: this.state.disponible
        }
        this.props.getVoiture(newCar);

        this.setState(this.initState);
        toast('Voiture ajoutée avec succès!', {className:'bg-success text-white fw-bolder'});
        //window.location.reload(true);

    }
    render() {
        const {marque, modele, pays, prix, disponible} = this.state;
       
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center"> Formulaire d'ajout</div>
                        <div className="card-body">
                        
                            <form className="row g-3 needs-validation" onSubmit={this.handleSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="marque" className="form-label">Marque</label>
                                <input type="text" required  className="form-control"  id="marque" name="marque" value={marque} onChange={this.handleChange}  placeholder="Entrer la marque" />
                               
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="modele" className="form-label">Modele</label>
                                <input type="text" required className="form-control" id="modele"  name="modele" value={modele} onChange={this.handleChange} placeholder="Entrer le modèle" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="pays" className="form-label">Pays</label>
                                <input type="text" required className="form-control" id="pays" name="pays" value={pays} onChange={this.handleChange} placeholder="Entrer le pays" />
                               
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prix" className="form-label">Prix</label>
                                <input type="number" required className="form-control" id="prix" value={prix} onChange={this.handleChange}  name="prix" placeholder="Entrer le prix" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="prix" className="form-label">Image</label>
                                <input type="file" required className="form-control" id="image" onChange={this.handleChange} name="image"  />
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
                                <button className="btn btn-primary col-12" type="submit">Soumettre</button>
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
 
export default Ajout;