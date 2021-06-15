import Revenue from './revenue/revenue';
import Chart from './chart/chart';
import Transasoes from './transacoes/transacoes';
import axios from 'axios';

var encomendas = [];
var clientes = [];
const requestCli = axios.get('http://[::1]:3000/clientes');
const requestEnc = axios.get('http://[::1]:3000/encomendas');
axios.all([requestCli, requestEnc])
.then(axios.spread((...responses) => {
  clientes = responses[0].data;
  encomendas = responses[1].data.reverse();
}));



/*
axios.get('http://[::1]:3000/encomendas')
.then(response => {
  encomendas = response.data;
  console.log(response.data);
});*/




export const dashboard = () => (
  <div>
    <Revenue encomendas={encomendas}/>
    <Chart encomendas={encomendas} />
    <Transasoes clientes={clientes} encomendas={encomendas}/>

  </div>
);