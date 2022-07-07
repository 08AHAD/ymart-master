import Navbar from './component/Navbar';
import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import { Switch ,Route } from 'react-router-dom';
import About from './component/About';

function App() {
  return (
    <>

    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/products' component = {Products}/>
    <Route exact path='/about' component = {About}/>
    <Route exact path='/products/:id' component = {Product}/>
    </Switch>
    </>
  );
}

export default App;
