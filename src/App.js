import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import 'bootstrap/js/dist/modal.js';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container ">
       <Menu />
       <Footer />
    </div>
  );
}

export default App;
