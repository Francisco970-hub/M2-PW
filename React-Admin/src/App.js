import { Admin, Resource } from 'react-admin';

import lb4Provider from 'react-admin-lb4';
import { CategoriaCreate, CategoriaEdit, CategoriaList } from './components/categorias';
import { ClienteCreate, ClienteEdit, ClienteList } from './components/clientes';
import { EncomendaCreate, EncomendaEdit, EncomendaList } from './components/encomendas';
import { ProdutoList, ProdutoCreate, ProdutoEdit } from './components/produtos';
import { StockCreate, StockEdit, StockList } from './components/stocks';

import {  ShoppingCart } from '@material-ui/icons';
import  PeopleIcon  from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ComputerIcon from '@material-ui/icons/Computer';
import { dashboard } from './components/dashboard';

import { Button, Pane, Text, majorScale } from 'evergreen-ui'
const dataProvider = lb4Provider('http://localhost:3000');



function App() {
  return (
    <Admin dashboard={dashboard} dataProvider={dataProvider}>    
      <Resource name='clientes' list={ClienteList} create={ClienteCreate} edit={ClienteEdit} icon={PeopleIcon}/>
      <Resource name='categorias' list={CategoriaList} create={CategoriaCreate} edit={CategoriaEdit} icon={CategoryIcon}/>
      <Resource name='produtos' list={ProdutoList} create={ProdutoCreate} edit={ProdutoEdit} icon={ComputerIcon}/>
      <Resource name='encomendas' list={EncomendaList} create={EncomendaCreate} edit={EncomendaEdit} icon={ShoppingCart}/>
      <Resource name='stocks' list={StockList} edit={StockEdit} create={StockCreate} icon={LibraryBooksIcon}/>
  </Admin>
  );
}

export default App;
