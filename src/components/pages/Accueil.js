import React from 'react'
const Accueil = () => {
    const voitures = JSON.parse(localStorage.getItem('voituresKey'));
    return (
        <>
            <div className="bg-light p-5">
                <div className="container text-center">
                    <h1 className="display-4">Concessionnaire de voitures</h1>
                    <p className="lead"> Vous voulez des voitures de luxe, visitez C&V ! </p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-1">
                
                    {voitures.map((voiture, index) =>{
                        return <div className="col">
                            <div className="card">
                                <img src={`images/${voiture.image}`} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Voiture N° 00{voiture.id}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Marque: {voiture.marque}</li>
                                        <li className="list-group-item">Modele: {voiture.modele}</li>
                                        <li className="list-group-item">Pays: {voiture.pays}</li>
                                        <li className="list-group-item">Prix: {voiture.prix}€</li>
                                        
                                    </ul>
                                    {voiture.disponible
                                    ?<button className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#auto${index}`}>Commander</button>
                                    :<button className="btn btn-secondary" disabled="true">Indisponible</button>
                                    }

                                    <div className="modal fade" id={`auto${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{voiture.marque}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <div className="card mb-3 " >
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                <img src={`images/${voiture.image}`} width="150" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Paiement de Voiture 00{index + 1}</h5>
                                                    <form>
                                                        
                                                            
                                                            <input type="text" className="form-control mb-1" id="nom" placeholder="Entrez votre nom" />
                                                        
                                                          
                                                            <input type="text" className="form-control mb-1" id="adresse" placeholder="Entrez votre adresse" />
                                                       
                                                      
                                                           
                                                            <input type="text" className="form-control mb-1" id="nc" placeholder="Votre numéro de carte" />
                                                       
                                                           
                                                            <input type="date" className="form-control mb-1" id="dv" placeholder="Date de validites" />
                                                        
                                                           
                                                            <input type="text" className="form-control mb-1" id="cr" placeholder="Crypto" />
                                                     
                                                        <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Valider</button>
                                                        </form>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        {/* <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                
            </div>
        </>
    )
}

export default Accueil
