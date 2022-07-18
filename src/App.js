
import './App.css';
import Login from './componentes/Login';
import { Route, Routes } from 'react-router-dom';
import Sales from './componentes/Sales';
import ProductsAdmin from './componentes/products/ProductsAdmin';
import ProductsAdd from './componentes/products/productsAdd';
import ProductsEdit from './componentes/products/ProductsEdit';

import ClientsAdmin from './componentes/clients/ClientsAdmin';
import ClientsAdd from './componentes/clients/ClientsAdd';
import ClientsEdit from './componentes/clients/ClientsEdit';

import UsersAdmin from './componentes/clients/UsersAdmin';
import UserAdd from './componentes/clients/UsersAdd';
import UsersEdit from './componentes/clients/UsersEdit';


function App() {
  return (
    <div class="app">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/sales' element = {<Sales/>}></Route>
        <Route path='/products' element = {<ProductsAdmin/>}></Route>
        <Route path='/products/add' element = {<ProductsAdd/>}></Route>
        <Route path='/products/edit' element = {<ProductsEdit/>}></Route>
        <Route path='/clients' element = {<ClientsAdmin/>}></Route>
        <Route path='/clients/add' element = {<ClientsAdd/>}></Route>
        <Route path='/clients/edit' element = {<ClientsEdit/>}></Route>
        <Route path='/users' element = {<UsersAdmin/>}></Route>
        <Route path='/users/add' element = {<UserAdd/>}></Route>
        <Route path='/users/edit' element = {<UsersEdit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
