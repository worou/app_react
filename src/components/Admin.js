import React, { Component } from 'react';
import { BsFillPlusSquareFill } from "react-icons/bs";
import Ajout from './Ajout';
import Edit from './Edit';
import Liste from './Liste';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            voitures:[
                {id:1, marque:'Peugeot', modele:'208', pays:'France', image:'208.jpg', prix:5000, disponible:true},
                {id:2, marque:'Renault', modele:'Clio4', pays:'France', image:'clio4.jpg', prix:2500, disponible:false},
                {id:3, marque:'Tesla', modele:'X', pays:'Usa', image:'x.jpg',prix:95000, disponible:false},
                {id:4, marque:'Bmw', modele:'M5', pays:'Allemagne', image:'m5.jpg',prix:149000, disponible:true},
            ],
            editForm: false,
            indexMod: -1,
            editAuto: {id:-1, marque:'', modele:'', pays:'', image:'', prix:0, disponible:false},
         }
    }

    componentDidMount = ()=>{
    
        let voitures1 = JSON.parse(localStorage.getItem('voituresKey'));
        if(!voitures1 || voitures1.length === 0){
            localStorage.setItem('voituresKey',JSON.stringify(this.state.voitures));
            let voituresRecup = JSON.parse(localStorage.getItem('voituresKey'));
            this.setState({voitures: voituresRecup});
        }else{

            let voitures2 = JSON.parse(localStorage.getItem('voituresKey'));
            this.setState({voitures: voitures2});
        }
       
    }

    handleRemove = (index)=>{
        console.log(index);

        let newVoitures = [...this.state.voitures];
        let autos = newVoitures.filter((v, id) =>{
            return id !== index;
        });
        console.log(autos);

        this.setState({voitures:autos},()=>{
            localStorage.setItem('voituresKey', JSON.stringify(this.state.voitures));
            console.log(this.state);
        });

    }

    handleShow = (etat)=>{
        this.setState({editForm:true});
    }
    handleCar = (auto)=>{
        auto.id = this.state.voitures[this.state.voitures.length -1].id + 1;
        let voituresClone = [...this.state.voitures, auto];
        this.setState({voitures: voituresClone}, ()=>{
            localStorage.setItem('voituresKey', JSON.stringify(this.state.voitures));
        });
        console.log(auto);
    }
    handleItem = (index)=>{
        const vEdit =  this.state.voitures[index];
        this.setState({editAuto: vEdit, indexMod: index});
        console.log(index);
    }

    handleUpdate = (data)=>{
        let voituresUpdate = [...this.state.voitures];
        voituresUpdate[this.state.indexMod] = data;
        this.setState({voitures: voituresUpdate}, ()=>{
            localStorage.setItem('voituresKey', JSON.stringify(this.state.voitures));
        });
        //console.log(data); BsFillPlusSquareFill
    }
    render() { 
        console.log(this.state.editAuto);
        return ( 
            <>  
                <h1 className="bg-secondary text-white text-center">Administration</h1>
                {
                    (!this.state.editForm && this.state.indexMod === -1) 
                    &&  <button onClick={this.handleShow} className="btn btn-warning offset-11 mb-1 ">
                        <BsFillPlusSquareFill />
                       </button>
                }
               
                {
                    (!this.state.editForm && this.state.indexMod > -1)
                    ?<Edit autoShared = {this.state.editAuto} update = {this.handleUpdate}/>
                    :
                    (this.state.editForm)
                    ?<Ajout getVoiture = {this.handleCar} />
                    :<Liste lines = {this.state.voitures} handleDelete = {this.handleRemove} handleEdit = {this.handleItem} />
                }
                
               
                
            </>
         );
    }
}
 
export default Admin;