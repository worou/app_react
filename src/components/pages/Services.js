import React, {Component} from 'react'

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            listePays: [],
            error: null,
            isLoaded: false

        };
    }

    componentDidMount = () =>{
        
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res =>res.json())
        .then(results => {
            //console.log(results)
            const tabResults = results.map((pays, index)=>{
               return {
                nom: pays.translations.fr,
                capitale: pays.capital,
                region: pays.region,
                sous_region: pays.subregion,
                population: pays.population,
                drapeau: pays.flag,
                monnaie: pays.currencies[0].name
               } 
            })
            this.setState({isLoaded: true, listePays: tabResults});
        })
        .catch((error)=>{
            console.log('Impossible de récupérer les données'+error);
        })
    }
    render(){
        const { error, isLoaded, listePays } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Chargement…</div>;
          } else {
        console.log(listePays);
        return (
            <div>
                <h1>Services</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {this.state.listePays.map((pays, index) => {
                        return <div className="col" key={index}>
                            <div className="card">
                                <img src={pays.drapeau} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center strong">{pays.nom}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Capitale :</strong> {pays.capitale}</li>
                                        <li className="list-group-item"><strong>Region :</strong> {pays.region}</li>
                                        <li className="list-group-item"><strong>Sousregion :</strong> {pays.sous_region}</li>
                                        <li className="list-group-item"><strong>Population :</strong> {pays.population}</li>
                                        <li className="list-group-item"><strong>Monnaie :</strong> {pays.monnaie}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
        }
    }
}

export default Services
