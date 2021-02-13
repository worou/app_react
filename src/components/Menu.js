import React from 'react';
import { FaCarAlt, FaHome, FaUserLock, FaUserTimes } from 'react-icons/fa';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import '../App.css';

import Admin from './Admin';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import NotFound from './pages/NotFound';
import Services from './pages/Services';

const authenticate = ()=>{
    const d = new Date();
    const test = d.toLocaleDateString();
    if(test === sessionStorage.getItem('token')){
       return true; 
    }else{
        return false;
    }
}

const Menu = () => {
    return ( 
        <>
             <BrowserRouter basename="/app_react">
             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand" activeClassName="" to="/" ><FaCarAlt/> C&V</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link " activeClassName="active" aria-current="page" to="/"  exact><FaHome/> Accueil</NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/apropos">A propos</NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink >
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {!authenticate()
                        ?<NavLink className="nav-link" activeClassName="active" to="/login"><FaUserLock/> Connexion</NavLink >
                        :<NavLink className="nav-link" activeClassName="active" to="/logout"><FaUserTimes/> Déconnexion</NavLink >
                        }
                    </span>
                    </div>
                </div>
                </nav>
                {/* <Footer/> */}
                <Switch>

                    <Route path='/' component={Accueil} exact/>
                    <Route path='/apropos' component={Apropos} />
                    <Route path='/services' component={Services} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                    <Redirect  from='/admin123/reload' to="/admin123" />
                    <Route path='/admin123' render={()=>(
                        authenticate()
                        ?(<Admin />)
                        :(<Redirect to="/login"/>)
                    )}  />
                    <Route path='*' component={NotFound} />
                   
                    
                </Switch>
              </BrowserRouter>
             
            
        </>
     );
}
 
export default Menu;